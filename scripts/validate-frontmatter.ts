import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import { z } from "zod";

const FRONTMATTER_SCHEMA = z.object({
  title: z.string().min(3, "title must be at least 3 characters"),
  slug: z
    .string()
    .regex(/^[a-z0-9-]+$/, {
      message: "slug must be lower-kebab-case (a-z, 0-9, -)",
    }),
  date: z
    .string()
    .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/u, {
      message: "date must be formatted YYYY-MM-DD",
    }),
  summary: z.string().min(10, "summary must be at least 10 characters"),
  tags: z.array(z.string()).optional(),
  draft: z.boolean().optional(),
  updated: z.string().optional(),
  cover: z.string().optional(),
});

async function main() {
  const { globby } = await import("globby");
  const files = await globby(["pages/blog/**/*.mdx"], {
    gitignore: true,
  });

  if (files.length === 0) {
    console.warn("⚠️  No MDX files found under pages/blog");
    return;
  }

  const errors: string[] = [];

  for (const file of files) {
    const raw = fs.readFileSync(file, "utf8");
    const { data } = matter(raw);
    const result = FRONTMATTER_SCHEMA.safeParse(data);

    if (!result.success) {
      const relativePath = path.relative(process.cwd(), file);
      const message = result.error.issues
        .map((issue) => `• ${issue.path.join(".") || "root"}: ${issue.message}`)
        .join("\n");
      errors.push(`❌ ${relativePath}\n${message}`);
    }
  }

  if (errors.length > 0) {
    console.error(errors.join("\n\n"));
    process.exitCode = 1;
    return;
  }

  console.log(`✅ Frontmatter OK for ${files.length} files`);
}

main().catch((error) => {
  console.error("Unexpected error while validating frontmatter", error);
  process.exitCode = 1;
});
