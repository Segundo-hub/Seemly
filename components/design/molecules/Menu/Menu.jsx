import Link from "next/link"
import { fiTree, fiStack, fiMount } from "@icons/IconsSidebar"
import { ViewIcon } from "@icons/ViewIcon"
import menu from "./n.module.scss"

export const Menu = () => (
   <nav className={menu["sidebar"]}>
      <Link href='/data-structures'>
         <a className={menu.item}>
            <ViewIcon icon={fiTree} />
            <span>Estructura de Datos</span>
         </a>
      </Link>
      <Link href='/algorithms'>
         <a className={menu.item}>
            <ViewIcon icon={fiStack} />
            <span>Algoritmos</span>
         </a>
      </Link>
      <Link href='/design-patterns'>
         <a className={menu.item}>
            <ViewIcon icon={fiMount} />
            <span>Patrones de Diseño</span>
         </a>
      </Link>
   </nav>
)
