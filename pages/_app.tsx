import type { AppProps } from "next/app"
import { BooksContextProvider } from "~/context/BooksContext"
import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BooksContextProvider>
      <>
        <Component {...pageProps} />
      </>
    </BooksContextProvider>
  )
}

export default MyApp
