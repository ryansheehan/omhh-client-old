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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Gentium+Basic&family=Montserrat:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
