import Head from "next/head"
import { Fragment } from "react"
import "./../assets/styles/globals.scss"
import NProgress from "nprogress"
import Router from "next/router"

const DataStructures = ({ Component, pageProps }) => (
   <Fragment>
      <Head>
         <title>Seemly - Data Estructures & Algorithms </title>
         <meta name='viewport' content='width=device-width, initial-scale=1.0' />
         <link rel='shortcut icon' href='/favicon.svg' type='svg/x-icon' />
         <link rel='preconnect' href='https://fonts.gstatic.com' />
         <link href='https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&display=swap' rel='stylesheet' />
      </Head>
      <Component {...pageProps} />
   </Fragment>
)

NProgress.configure({
   minimum: 0.3,
   easing: "ease",
   speed: 800,
   showSpinner: true,
})

Router.events.on("routeChangeStart", () => NProgress.start())
Router.events.on("routeChangeComplete", () => NProgress.done())
Router.events.on("routeChangeError", () => NProgress.done())

export default DataStructures
