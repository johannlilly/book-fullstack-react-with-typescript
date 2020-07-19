import React from "react"
import Head from "next/head"
import { AppContext } from "next/app"
import { ThemeProvider } from "styled-components"

import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Center } from "../components/Center"
import { GlobalStyle, theme } from "../shared/theme"
import { store } from "../store"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <Head>
        <title>What's Next?!</title>
      </Head>

      <Header />
      <main className="main">
        <Center>
          <Component {...pageProps} />
        </Center>
      </main>
      <Footer />
    </ThemeProvider>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }: AppContext) => ({
  pageProps: {
    ...(Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {})
  }
})

export default store.withRedux(MyApp)
