"use client";
import { useEffect, useRef, useState } from "react";
import { vertexShader, fragmentShader } from "@/lib/distortion-shaders";
import { useLocale } from "./LocaleProvider";
export function DistortedImage({
  src,
  fade = false,
  replay = false,
}: {
  src: string;
  fade?: boolean;
  replay?: boolean;
}) {
  const { t } = useLocale();
  const root = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const element = root.current,
      surface = canvas.current;
    if (
      !element ||
      !surface ||
      matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const gl = surface.getContext("webgl", {
      alpha: true,
      premultipliedAlpha: false,
      antialias: true,
    });
    if (!gl) return;
    let frame = 0,
      disposed = false,
      visible = false,
      started = false,
      start = 0,
      loaded = false,
      progress = 0;
    const shader = (type: number, source: string) => {
      const result = gl.createShader(type);
      if (!result) throw new Error("Shader allocation failed");
      gl.shaderSource(result, source);
      gl.compileShader(result);
      if (!gl.getShaderParameter(result, gl.COMPILE_STATUS)) {
        gl.deleteShader(result);
        throw new Error("Image reveal shader unavailable");
      }
      return result;
    };
    let vertex: WebGLShader, fragment: WebGLShader;
    try {
      vertex = shader(gl.VERTEX_SHADER, vertexShader);
      fragment = shader(gl.FRAGMENT_SHADER, fragmentShader);
    } catch {
      return;
    }
    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);
    const positions: number[] = [],
      uvs: number[] = [],
      indices: number[] = [],
      segments = 64;
    for (let y = 0; y <= segments; y++)
      for (let x = 0; x <= segments; x++) {
        positions.push(x / segments - 0.5, y / segments - 0.5, 0);
        uvs.push(x / segments, y / segments);
      }
    for (let y = 0; y < segments; y++)
      for (let x = 0; x < segments; x++) {
        const a = y * (segments + 1) + x,
          b = a + segments + 1;
        indices.push(a, b, a + 1, a + 1, b, b + 1);
      }
    const positionBuffer = gl.createBuffer(),
      uvBuffer = gl.createBuffer(),
      indexBuffer = gl.createBuffer();
    const attribute = (
      buffer: WebGLBuffer | null,
      name: string,
      data: Float32Array,
      size: number,
    ) => {
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
      const location = gl.getAttribLocation(program, name);
      if (location >= 0) {
        gl.enableVertexAttribArray(location);
        gl.vertexAttribPointer(location, size, gl.FLOAT, false, 0, 0);
      }
    };
    attribute(uvBuffer, "uv", new Float32Array(uvs), 2);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(
      gl.ELEMENT_ARRAY_BUFFER,
      new Uint16Array(indices),
      gl.STATIC_DRAW,
    );
    const uniform = (name: string) => gl.getUniformLocation(program, name);
    const identity = new Float32Array([
      1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
    ]);
    gl.uniformMatrix4fv(uniform("modelViewMatrix"), false, identity);
    gl.uniform1f(uniform("uScale"), 1);
    gl.uniform1f(uniform("uDistortionStrength"), -100);
    gl.uniform1f(uniform("uBlurStrength"), 0);
    gl.uniform1i(uniform("uTexture"), 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.clearColor(0, 0, 0, 0);
    const texture = gl.createTexture();
    const image = new window.Image();
    image.decoding = "async";
    const draw = () => {
      if (!loaded || disposed) return;
      gl.uniform1f(uniform("uProgress"), progress);
      gl.uniform1f(uniform("uAlpha"), fade ? progress : 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
    };
    const resize = () => {
      const width = element.clientWidth,
        height = element.clientHeight;
      if (!width || !height) return;
      const ratio = Math.min(devicePixelRatio, 2);
      surface.width = Math.round(width * ratio);
      surface.height = Math.round(height * ratio);
      gl.viewport(0, 0, surface.width, surface.height);
      attribute(
        positionBuffer,
        "position",
        new Float32Array(
          positions.map((value, index) =>
            index % 3 === 0
              ? value * width
              : index % 3 === 1
                ? value * height
                : value,
          ),
        ),
        3,
      );
      gl.uniform2f(uniform("uPlaneSize"), width, height);
      gl.uniformMatrix4fv(
        uniform("projectionMatrix"),
        false,
        new Float32Array([
          2 / width,
          0,
          0,
          0,
          0,
          2 / height,
          0,
          0,
          0,
          0,
          -1,
          0,
          0,
          0,
          0,
          1,
        ]),
      );
      draw();
    };
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / 1200);
      progress = t === 1 ? 1 : 1 - (1 + 9 * t) * Math.exp(-9 * t);
      draw();
      if (t < 1 && visible) frame = requestAnimationFrame(tick);
    };
    const run = () => {
      if (!loaded || !visible || disposed) return;
      if (!started || replay) {
        started = true;
        start = performance.now();
        progress = 0;
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(tick);
      } else {
        progress = 1;
        draw();
      }
    };
    image.onload = () => {
      if (disposed) return;
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        image,
      );
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.uniform2f(
        uniform("uMediaSize"),
        image.naturalWidth,
        image.naturalHeight,
      );
      loaded = true;
      resize();
      setReady(true);
      run();
    };
    const observer = new IntersectionObserver(
      (entries) => {
        visible = entries.some((entry) => entry.isIntersecting);
        if (visible) {
          if (!image.src) image.src = src;
          run();
        } else cancelAnimationFrame(frame);
      },
      { threshold: 0 },
    );
    observer.observe(element);
    const sizing = new ResizeObserver(resize);
    sizing.observe(element);
    return () => {
      disposed = true;
      image.onload = null;
      observer.disconnect();
      sizing.disconnect();
      cancelAnimationFrame(frame);
      gl.deleteTexture(texture);
      gl.deleteBuffer(positionBuffer);
      gl.deleteBuffer(uvBuffer);
      gl.deleteBuffer(indexBuffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertex);
      gl.deleteShader(fragment);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [src, fade, replay]);
  return (
    <div ref={root} className="relative h-full w-full overflow-hidden">
      <img
        src={src}
        alt={t("Abstract studio artwork")}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ opacity: ready ? 0 : 1 }}
      />
      <canvas
        ref={canvas}
        aria-hidden
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}
