import { useContext } from "react"
import { MenuContext } from "../../../context/MenuContext"
import { SeemlyLogotype, MenuBurger } from "../../atoms"
import { SearchWidget } from "../../molecules/SearchWidget"
import styles from "./m.module.scss"

export const MenuHeader = () => {
   const { setOpen, open } = useContext(MenuContext)
   return (
      <header className={`${styles.header} center`}>
         <nav className={`${styles.nav} l-section`}>
            <div className='center'>
               <MenuBurger onClick={() => setOpen(!open)} active={open} />
               <SearchWidget />
               <SeemlyLogotype className='to-right' />
            </div>
         </nav>
      </header>
   )
}
