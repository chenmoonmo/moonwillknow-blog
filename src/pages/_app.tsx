import "../styles/globals.css";
import "normalize.css/normalize.css";
import type { AppProps } from "next/app";
import { Header } from "../components";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Header />
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
