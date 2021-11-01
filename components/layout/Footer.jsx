import { Fragment, useEffect } from "react"
import styles from "./ly.module.scss"
import { Information } from "./Information"

export const Footer = () => {
   useEffect(() => {
      window.fbAsyncInit = function () {
         FB.init({
            appId: "570852290664322",
            cookie: true,
            xfbml: true,
            version: "v12.0",
         })

         FB.AppEvents.logPageView()
      }
   }, [])
   const Login = () => {
      FB.api("/me?fileds=name,picture,email", user => {
         console.log(user)
      })
   }
   return (
      <Fragment>
         <footer className={styles.footer}>
            © 2021 Code Seemly - Developed Alex Second <button onClick={Login}>LOGIN</button>
         </footer>
         {/* <Information
            title='PAGINA INCOMPLETA'
            discription='Estamos trabajando duro para completar la pagina. Se paciente 😊'
         /> */}
      </Fragment>
   )
}
