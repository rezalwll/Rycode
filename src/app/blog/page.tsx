import { referenceStyles } from "@/styles/reference-styles";
import type { Metadata } from "next";
import { BlogBlock0 } from "@/components/pages/BlogBlock0";
import { BlogBlock1 } from "@/components/pages/BlogBlock1";
import { BlogBlock2 } from "@/components/pages/BlogBlock2";
import { BlogBlock3 } from "@/components/pages/BlogBlock3";
import { BlogBlogSection } from "@/components/pages/BlogBlogSection";
export const metadata: Metadata = { title: "Blog" };
export default function Page() {
  return (
    <main
      data-framer-root=""
      className="framer-ZFEwM framer-l5lhc contents!"
      style={referenceStyles.s430a37b031}
    >
      <h1 className="sr-only">Blog</h1>
      <BlogBlock0 />
      <BlogBlock1 />
      <BlogBlock2 />
      <BlogBlock3 />
      <BlogBlogSection />
    </main>
  );
}
