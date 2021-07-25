import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/layout";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Oh My Heart and Home</title>
        <meta name="description" content="Good food with lots of love" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
