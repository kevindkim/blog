export default function Home() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col gap-10 px-6 py-16">
      <section>
        <h1 className="text-3xl font-bold">Kevin D. Kim</h1>
        <p className="mt-2 text-base text-neutral-600 dark:text-neutral-300">
          Notes on web3, programming, and AI — plus the builds and experiments behind them.
        </p>
        <a
          className="mt-6 inline-flex items-center gap-2 text-blue-600 transition hover:text-blue-500 dark:text-blue-400"
          href="/blog"
        >
          See the blog →
        </a>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Latest Posts</h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-300">
          A curated list of recent writing will appear here after we wire frontmatter parsing. For now, explore the blog archive.
        </p>
        <a
          className="mt-4 inline-flex items-center gap-2 text-blue-600 transition hover:text-blue-500 dark:text-blue-400"
          href="/blog/hello-world"
        >
          Read the sample post →
        </a>
      </section>
    </main>
  );
}
