import { Html, Head, Main, NextScript } from "next/document";

export default function Document(props: any) {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-white w-full h-screen dark:bg-neutral-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
