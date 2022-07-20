import '../styles/globals.css'
import 'normalize.css/normalize.css'
import type { AppProps } from 'next/app'
import { Footer, Header } from '../components'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import store from 'store'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Head>
          <title>Moon Will Know</title>
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp
