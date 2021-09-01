import { createContext, useState } from "react"

export const MenuContext = createContext()

export const MenuProvider = ({ children }) => {
   const [open, setOpen] = useState(false)
   const menuState = { open, setOpen }
   return <MenuContext.Provider value={menuState}>{children}</MenuContext.Provider>
}
