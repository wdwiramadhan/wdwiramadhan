import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="h-screen w-full bg-white dark:bg-neutral-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
