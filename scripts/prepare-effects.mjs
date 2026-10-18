import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
const assets=JSON.parse(await readFile('.reference/assets.json','utf8'));
const effects=[
 {className:'framer-1dynl3p-container',url:'https://framerusercontent.com/images/BrmirEq9mX3bvuVhQ0TgnA4Rw.png?width=1928&height=2456',fade:true,replay:false},
 {className:'framer-1vqif84-container',url:'https://framerusercontent.com/images/DyukueEIQWRKc2RSQj1u1o1FHpI.png?width=2208&height=1912',fade:false,replay:true},
 {className:'framer-18pq9ai-container',url:'https://framerusercontent.com/images/RT0x7s3ztzNs06dxgHPhM6UNg.png?width=1504&height=904',fade:true,replay:false},
];
const contactResponse=await fetch('https://framerusercontent.com/sites/5utDWuJ5ZXJqPTzsEEUxZD/_u6xQov1F_HR59aDrt0rwraKOtdiCiVkUQFaqh_tduQ.Ba3-tvTI.mjs');
if(!contactResponse.ok)throw new Error('Contact reference component unavailable');
const contactCode=await contactResponse.text();await writeFile('.reference/contact-component.mjs',contactCode);
const distortionAlias=contactCode.match(/import\{[^}]*t as (\w+)\}from"\.\/Distortion\./)?.[1];
if(distortionAlias){let position=-1;while((position=contactCode.indexOf(distortionAlias+',{animateProp',position+1))>=0){const before=contactCode.slice(Math.max(0,position-600),position),body=contactCode.slice(position,position+3000);const className=[...before.matchAll(/className:`([^`]+)`/g)].at(-1)?.[1],url=body.match(/upImage:[\s\S]*?src:`([^`]+)`/)?.[1];if(className&&url&&!effects.some(e=>e.className===className))effects.push({className,url,fade:false,replay:true});}}
for(const effect of effects){const url=new URL(effect.url),canonical=url.origin+url.pathname;let asset=assets.find(a=>new URL(a.url).pathname===url.pathname);if(!asset){const file=createHash('sha256').update(canonical).digest('hex').slice(0,16)+'.png';const response=await fetch(effect.url);if(!response.ok)throw new Error(effect.url);await writeFile('public/assets/'+file,Buffer.from(await response.arrayBuffer()));asset={url:effect.url,file,local:'/assets/'+file};assets.push(asset);}effect.src=asset.local;}
await writeFile('.reference/assets.json',JSON.stringify(assets,null,2));await writeFile('.reference/image-effects.json',JSON.stringify(effects,null,2));
const shaders=JSON.parse(await readFile('.reference/distortion-shaders.json','utf8'));
await mkdir('src/lib',{recursive:true});await writeFile('src/lib/distortion-shaders.ts','// Public reference image-reveal shaders, adapted to a local WebGL React component.\n// Reference module: Distortion.BzdatpjJ.mjs. No Framer or Three.js runtime is used.\nexport const vertexShader='+JSON.stringify('precision highp float;\nattribute vec3 position;\nattribute vec2 uv;\nuniform mat4 projectionMatrix;\nuniform mat4 modelViewMatrix;\n'+shaders[2])+';\nexport const fragmentShader='+JSON.stringify('precision highp float;\n'+shaders[3])+';\n');
const code=await readFile('.reference/scroll-text-component.mjs','utf8');
const questions=[...code.matchAll(/i0mArxHVl:`([^`]+)`[^}]*?r13Urevsh:`([^`]+)`/g)].map(m=>({question:m[1],answer:m[2]}));
await writeFile('.reference/faq-content.json',JSON.stringify(questions,null,2));console.log('Image effects',effects.map(e=>e.src),'FAQ answers',questions.length);
