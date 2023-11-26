// Import global styles for the entire application and necessary types from Next.js
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { BookStoreContextProvider } from '../context/my-context'

export default function App({ Component, pageProps }: AppProps) {

  return (
    // Render the entire application within the BookStoreContextProvider
    <BookStoreContextProvider>
      <Component {...pageProps} />
    </BookStoreContextProvider>
  )
}
