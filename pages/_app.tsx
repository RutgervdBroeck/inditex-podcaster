import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import styles from "@/styles/App.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Podcaster</title>
      <meta name="description" content="Podcaster assessment for Inditex" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={`${styles.main} ${inter.className}`}>
      <Component {...pageProps} />
    </main>
  </>
);

export default App;
