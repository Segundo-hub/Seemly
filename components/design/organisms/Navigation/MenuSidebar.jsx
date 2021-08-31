import { Fragment, useContext } from "react"
import { MenuContext } from "components/context/MenuContext"
import { useMediaQuery } from "components/hooks/useMedia"
import { SeemlyLogotype } from "components/design/atoms"
import { Menu } from "../../molecules/Menu/Menu"
import style from "./m.module.scss"

export const MenuSidebar = ({ type }) => {
   const { setOpen, open } = useContext(MenuContext)
   const media = useMediaQuery(`(${type}-width: 992px)`)
   const handleClose = e => {
      !e.target.closest(".menu--container * ") && setOpen(false)
   }
   return (
      <Fragment>
         <aside className={`${style.aside} ${open ? "active" : "hidden"}`} onClick={handleClose}>
            <div className={`${style["menu"]} ${open ? style["active"] : ""} `}>
               <SeemlyLogotype variant='bigger' />
               <Menu />
            </div>
            <div className='overlay-background' />
         </aside>
      </Fragment>
   )
}
