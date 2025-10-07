import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

import type { Metadata } from "next";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100`}
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
            </div>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
