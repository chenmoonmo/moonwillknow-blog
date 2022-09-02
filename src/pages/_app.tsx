import '../styles/globals.scss';
import 'normalize.css/normalize.css';
import type { AppProps } from 'next/app';
import { Footer, Header } from '../components';
import { ChakraProvider, useColorMode } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from 'store';
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';
import { useMount } from 'ahooks';
import { useMixpanel } from 'mixpanel';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <App Component={Component} pageProps={pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

function App({ Component, pageProps }: any) {
  const { colorMode } = useColorMode();
  const { visit } = useMixpanel();
  useMount(() => {
    visit();
  });
  return (
    <>
      <Head>
        <title>Moon Will Know</title>
        <meta name='application-name' content='MoonWillKnow' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='MoonWillKnow' />
        <meta name='description' content='Moon will know' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-TileColor' content='#2B5797' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name='theme-color' content={colorMode === 'dark' ? 'rgb(30 41 59)' : '#fff'} />
        <link rel='manifest' href='/manifest.json' />
        <link rel='apple-touch-icon' href='/icons/icon-128x128.png' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
        />
      </Head>
      <Header />
      <AnimatePresence>
        <Component {...pageProps} />
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default MyApp;
