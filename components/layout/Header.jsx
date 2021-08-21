import React, { useState } from "react"
import styles from "./header.module.scss"
import { BurgerMenu, LogoIcon } from "./../design/atoms"
import { MainMenu } from "../design/organisms"

export const Header = () => {
   const [open, setOpen] = useState(false)
   const handleClick = () => {
      setOpen(!open)
   }
   const handleClose = e => {
      !e.target.closest(".menu--container * ") && setOpen(false)
   }
   return (
      <>
         <header className={`${styles.header} center`}>
            <nav className={`${styles.nav} l-section`}>
               <div className='center'>
                  <BurgerMenu click={handleClick} active={open} />
                  <span className='to-right'>
                     <LogoIcon />
                  </span>
               </div>
            </nav>
         </header>
         <MainMenu open={open} onClose={handleClose} type='max' />
      </>
   )
}
