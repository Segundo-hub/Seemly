import { MenuProvider } from "../context/MenuContext"
import { MenuHeader } from "../design/organisms/Navigation/MenuHeader"
import { MenuSidebar } from "../design/organisms/Navigation/MenuSidebar"

export const Header = () => {
   return (
      <MenuProvider>
         <MenuHeader />
         <MenuSidebar type='max' />
      </MenuProvider>
   )
}
