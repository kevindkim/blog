import { Analytics } from "@vercel/analytics/react";
import { Analytics } from "@vercel/analytics/react";
import { Major_Mono_Display, Space_Mono } from "next/font/google";
import Link from "next/link";

import ThemeToggle from "./theme-toggle";

import type { Metadata } from "next";

import "./globals.css";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

const majorMono = Major_Mono_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-major-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kevind.kim"),
  title: {
    default: "Kevin D. Kim",
    template: "%s – Kevin D. Kim",
  },
  description: "Notes, builds, and experiments across web3, programming, and AI.",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceMono.variable} ${majorMono.variable} bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100`}
      >
        <header className="border-b border-neutral-200 bg-white/80 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/80">
          <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
            <Link className="font-semibold" href="/">
              Kevin D. Kim
            </Link>
            <div className="flex items-center gap-5 text-sm">
              <Link className="hover:text-blue-600 dark:hover:text-blue-400" href="/blog">
                Blog
              </Link>
              <Link className="hover:text-blue-600 dark:hover:text-blue-400" href="/about">
                About
              </Link>
              <ThemeToggle />
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="border-t border-neutral-200 bg-white/80 px-6 py-6 text-sm text-neutral-600 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/80 dark:text-neutral-400">
          <div className="mx-auto flex max-w-4xl items-center justify-between">
            <span>© {new Date().getFullYear()} Kevin D. Kim</span>
            <Link className="hover:text-blue-600 dark:hover:text-blue-400" href="/privacy">
              Privacy
            </Link>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
