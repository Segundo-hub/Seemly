import { useEffect } from "react"
import { useMediaQuery } from "../../../hooks/useMedia"
import { Menu } from "../../molecules/Menu/Menu"
import style from "./m.module.scss"

const MenuSidebar = ({ open, $close, type }) => {
   const media = useMediaQuery(`(${type}-width: 992px)`)
   return (
      <>
         {media && (
            <aside
               className={`${style.menu} ${open ? style["active"] : ""} ${type == "min" ? style["desktop"] : ""}`}
               onClick={$close}
            >
               <div className='menu--container'>
                  <div
                     className='center'
                     style={{
                        textAlign: "center",
                        padding: "1rem",
                        width: "100%",
                        height: "var(--header-height)",
                        borderBottom: "1px solid var(--dark-light)",
                     }}
                  >
                     Seemly
                  </div>
                  <Menu />
               </div>
            </aside>
         )}
      </>
   )
}

module.exports = MenuSidebar
