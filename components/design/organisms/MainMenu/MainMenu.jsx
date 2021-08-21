import { useEffect } from "react"
import { useMediaQuery } from "../../../hooks/useMedia"
import { LogoIcon } from "../../atoms"
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
                  <div className='center brand--caption'>
                     <LogoIcon />
                     <span
                        style={{
                           fontSize: "1.5rem",
                           color: "#676666",
                           marginLeft: ".5rem",
                           fontFamily: "Fira Code",
                           fontWeight: "500",
                        }}
                     >
                        Seemly
                     </span>
                  </div>
                  <Menu />
               </div>
            </aside>
         )}
      </>
   )
}

module.exports = MenuSidebar
