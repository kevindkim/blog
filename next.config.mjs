import nextra from "nextra";

const allowDrafts =
  process.env.NODE_ENV === "development" || process.env.ALLOW_DRAFTS === "true";

const withNextra = nextra({
  theme: "nextra-theme-blog",
  themeConfig: "./theme.config.tsx",
  mdxOptions: {
    remarkPlugins: [
      () => (
        _tree,
        file,
      ) => {
        const frontMatter =
          (file.data && (file.data.frontMatter || file.data.matter?.data)) || {};
        if (frontMatter?.draft === true && !allowDrafts) {
          const sourcePath =
            file.history?.[0] || file.path || "unknown MDX file";
          throw new Error(
            `Draft post blocked in non-dev build: ${sourcePath}. Remove draft: true or move the file to content/blog/.`,
          );
        }
      },
    ],
  },
});

export default withNextra({
  reactStrictMode: true,
});
