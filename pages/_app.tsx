import '../styles/globals.css'
import 'normalize.css/normalize.css'
import type { AppProps } from 'next/app'
import { Header } from '../components'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
