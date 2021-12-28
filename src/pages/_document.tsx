import { Html, Head, Main, NextScript } from "next/document";

export default function Document(props: any) {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-white dark:bg-neutral-900 transition-colors">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
