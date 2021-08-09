import { Fragment } from "react"
import { useMedia } from "./useMedia"

export const mediaReact = ({ children, size }) => {
   const large = useMedia("(min-width: 992px)")

   return (
      <Fragment>
         <div>{large}</div>
         {children}
      </Fragment>
   )
}
