import "../styles/globals.css";
import "normalize.css/normalize.css";
import type { AppProps } from "next/app";
import { Footer, Header } from "../components";
import { ChakraProvider, useColorMode } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "store";
import Head from "next/head";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Head>
          <title>Moon Will Know</title>
          <meta name="application-name" content="PWA App" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="PWA App" />
          <meta name="description" content="Best PWA App in the world" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />

          <meta name="msapplication-TileColor" content="#2B5797" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#000000" />

          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://www.moonwillknow.dev" />
          <meta name="twitter:title" content="PWA App" />
          <meta
            name="twitter:description"
            content="Best PWA App in the world"
          />

          <meta name="twitter:creator" content="@DavidWShadow" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="PWA App" />
          <meta property="og:description" content="Best PWA App in the world" />
          <meta property="og:site_name" content="PWA App" />
          <meta property="og:url" content="https://www.moonwillknow.dev" />

          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          />
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
