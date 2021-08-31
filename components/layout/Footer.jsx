import { Fragment } from "react"
import styles from "./ly.module.scss"
import { Information } from "./Information"

export const Footer = () => {
   return (
      <Fragment>
         <footer className={styles.footer}>© 2021 Code Seemly - Developed Alex Second</footer>
         {/* <Information
            title='PAGINA INCOMPLETA'
            discription='Estamos trabajando duro para completar la pagina. Se paciente 😊'
         /> */}
      </Fragment>
   )
}
