import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { generateAsciiMaze } from "utils";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const description = generateAsciiMaze(16);
    console.log(
      `${description}\n\n%cLet's find your 🧀️ in a maze!\n\n👉 https://github.com/maxam2017/rat-in-a-maze`,
      "color: #0c4c74; font-size: 12px; font-weight: 700"
    );

    return () => console.clear();
  }, []);

  return (
    <>
      <Head>
        <title>Path Finding Playground | 🐭 in a maze</title>
        <meta
          name="description"
          content="Help the mouse find the way to 🧀️ and learn DFS, BFS and other path-finding algorithms."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
