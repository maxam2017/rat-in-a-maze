import "../assets/stylesheet/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { generateAsciiMaze } from "utils";
import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import Header from "components/header/header";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const description = generateAsciiMaze(16);
    console.log(
      `${description}\n\n%cLet's find your š§ļø in a maze!\n\nš https://github.com/maxam2017/rat-in-a-maze`,
      "color: #0c4c74; font-size: 12px; font-weight: 700"
    );

    return () => console.clear();
  }, []);

  return (
    <>
      <Head>
        <title>š­ in a maze | Path Finding Playground</title>
        <meta
          name="description"
          content="Help the mouse find the way to š§ļø and learn DFS, BFS and other path-finding algorithms."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider defaultTheme="light">
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
