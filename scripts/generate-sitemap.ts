import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import { XMLBuilder } from "fast-xml-parser";

const SITE_URL = process.env.SITE_URL ?? "https://www.kevind.kim";

async function collectPages() {
  const { globby } = await import("globby");

  const staticPages = ["/", "/about", "/blog"];

  const blogFiles = await globby(["pages/blog/**/*.mdx"], { gitignore: true });
  const blogPosts = blogFiles
    .map((file) => {
      const raw = fs.readFileSync(file, "utf8");
      const { data } = matter(raw);
      if (data?.draft) {
        return null;
      }
      const slug = data?.slug ?? path.basename(file, path.extname(file));
      return `/blog/${slug}`;
    })
    .filter((url): url is string => Boolean(url));

  return [...staticPages, ...blogPosts];
}

function buildSitemap(urls: string[]) {
  const builder = new XMLBuilder({
    format: true,
    ignoreAttributes: false,
    suppressEmptyNode: true,
  });

  const urlset = urls.map((loc) => ({ loc: `${SITE_URL}${loc}` }));

  return builder.build({
    urlset: {
      "@_xmlns": "http://www.sitemaps.org/schemas/sitemap/0.9",
      url: urlset,
    },
  });
}

async function main() {
  const urls = await collectPages();
  const xml = buildSitemap(urls);
  const output = path.join(process.cwd(), "public", "sitemap.xml");
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(output, xml, "utf8");
  console.log(`🗺️  Generated sitemap with ${urls.length} entries -> ${output}`);
}

main().catch((error) => {
  console.error("Failed generating sitemap", error);
  process.exitCode = 1;
});
