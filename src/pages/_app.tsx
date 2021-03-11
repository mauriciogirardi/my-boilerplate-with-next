import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/GlobalStyles'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My Boilerplate</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
