# تصویر بالای بلاگ رایکد

- ابزار: built-in image_gen؛ حالت generate، بدون تصویر مرجع.
- خروجی نهایی سایت: `public/brand/journal/journal-hero.webp`، اندازهٔ ۱۲۰۰ × ۸۰۰؛ PNG اصلی در پوشهٔ generated_images ابزار حفظ شده است.
- کاربرد: تصویر سمت چپ معرفی بلاگ فارسی؛ جایگزین پنل متنی، با نمایش کامل در موبایل و بدون حرکت هنگام هاور.
- خروجی منتخب به فضای پروژه کپی و با Sharp برای وب بهینه شده است؛ ترکیب تصویر تغییر نکرده است.

## پرامپت نهایی

```text
Use case: stylized-concept.
Asset type: a single finished raster hero illustration for the LEFT image slot of RYCODE's Persian business-advice blog, replacing a dark text panel, landscape 3:2 composition.
Primary request: an attractive premium editorial 3D still life about turning knowledge into a clear digital business decision. An open sculptural ivory book with beautifully layered tactile paper pages in the foreground; a single smooth azure-blue ribbon/path rises from its pages and leads through a translucent lilac architectural arch to an elegant rounded frosted-glass browser window with a few abstract, unlabelled website layout blocks. A small polished blue sphere balances the scene. Compose as a coherent sophisticated physical studio set, with striking dimensional depth and strong visual hierarchy, not a collection of unrelated icons.
Style: art-directed high-end product photography of a minimalist 3D sculpture, tactile paper, soft ceramic, subtle glass refraction, realistic contact shadows, crisp well-defined edges.
Lighting: broad softbox from upper left, gentle highlights, calm optimistic daylight.
Palette: off-white background, azure #3498db, muted lavender #8b6bda, restrained charcoal details #303b48. Light and airy, nuanced materials, no neon.
Framing: landscape, centered object group with generous breathing room on all sides, complete subjects inside frame, attractive at 480px wide and on mobile. Cover the full image with the studio background; no surrounding UI, no webpage screenshot.
Text: absolutely no text, numbers, lettering, logos, watermark, code or fake statistics. No people, no robots, no stock business handshake, no financial charts.
```
