import type { AppProps } from "next/app";

import "../app/globals.css";
import "nextra-theme-blog/style.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
