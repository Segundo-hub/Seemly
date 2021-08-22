import React, { Fragment } from "react"
import styles from "./header.module.scss"
import { Information } from "./Information"

export const Footer = () => {
   return (
      <Fragment>
         <footer className={styles.footer}>© 2021 Seemly - Developed Alex Second</footer>
         <Information
            title='PAGINA INCOMPLETA'
            discription='Estamos trabajando duro para completar la pagina. Se paciente 😊'
         />
      </Fragment>
   )
}
