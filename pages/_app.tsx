import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app'


import '../styles/globals.css';
import localFont from "@next/font/local"

import Head from 'next/head'

const customFont = localFont({ src: "../public/fonts/NetflixSans_W_Rg.woff2", display: 'swap' })

export default function App({
  Component,
  pageProps: {
    session,
    ...pageProps
  }
}: AppProps) {
  return (
    <>
      <Head>
      </Head>
      <span className={customFont.className}>

        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </span>
    </>
  )
}
