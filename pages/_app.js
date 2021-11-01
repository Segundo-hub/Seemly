import "~/styles/globals.scss"
import Head from "next/head"
import NProgress from "nprogress"
import Router from "next/router"

const CodeSeemly = ({ Component, pageProps }) => (
   <>
      <Head>
         <title>Seemly - Data Estructures & Algorithms </title>
         <meta name='viewport' content='width=device-width, initial-scale=1.0' />
         <link rel='shortcut icon' href='/favicon.svg' type='svg/x-icon' />
         <link rel='preconnect' href='https://fonts.googleapis.com' />
         <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
         <link
            href='https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Lato:ital,wght@0,300;0,400;1,400&family=Roboto:wght@400;500;700&display=swap'
            rel='stylesheet'
         />
         <script
            async
            defer
            crossorigin='anonymous'
            src='https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0'
         ></script>
      </Head>
      <Component {...pageProps} />
   </>
)

NProgress.configure({
   minimum: 0.25,
   easing: "ease-in-out",
   speed: 600,
   showSpinner: false,
})

Router.events.on("routeChangeStart", () => NProgress.start())
Router.events.on("routeChangeComplete", () => NProgress.done())
Router.events.on("routeChangeError", () => NProgress.done())

export default CodeSeemly
