import React from "react"
import styles from "./header.module.scss"
import { Information } from "./Information"

export const Footer = () => {
   return (
      <>
         <footer className={styles.footer}>© 2021 Seemly - Developed Alex Second</footer>
         <Information
            title='PAGINA INCOMPLETA'
            discription='Estamos trabajando duro para completar la pagina. Se paciente 😊'
         />
      </>
   )
}
