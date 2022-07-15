import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { Layout } from "@/layouts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
