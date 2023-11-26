import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { BookStoreContextProvider } from './my-context'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <BookStoreContextProvider>
      <Component {...pageProps} />
    </BookStoreContextProvider>
  )
}
