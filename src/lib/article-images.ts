const sources: Record<string, string> = {
  "/assets/46fbadd99d68ae26.png":
    "/assets/f8530c1da19d5f0e.png 773w, /assets/46fbadd99d68ae26.png 1500w",
  "/assets/49673833e2e44520.png":
    "/assets/0295f0e470a65f2e.png 771w, /assets/49673833e2e44520.png 1500w",
  "/assets/61b2b6dd4ec05747.png":
    "/assets/9687ec6232582fba.png 573w, /assets/06627ec678df7c8c.png 1147w, /assets/61b2b6dd4ec05747.png 1500w",
  "/assets/79de4a62dbad0012.png":
    "/assets/48b931441014f0f7.png 682w, /assets/b064087d07393853.png 1365w, /assets/79de4a62dbad0012.png 1500w",
  "/assets/2b301ea654ac561c.png":
    "/assets/a81aef47088f07b8.png 771w, /assets/2b301ea654ac561c.png 1500w",
  "/assets/d7e288e78a7395d1.png":
    "/assets/a7cd10814999aa63.png 512w, /assets/25f1bd4d2e9d60aa.png 1024w, /assets/d7e288e78a7395d1.png 1500w",
};
export function articleImageSources(image: string | null | undefined) {
  return image ? sources[image] : undefined;
}
