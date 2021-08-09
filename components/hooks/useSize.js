import { useState, useEffect } from "react"
export const useSize = (cut_a, cut_b) => {
   const [width, setWidth] = useState(0)
   const [height, setHeight] = useState(0)

   useEffect(() => {
      setHeight(window.innerHeight - cut_a || 0)
      setWidth(window.innerWidth - cut_b || 0)
      const handleResize = () => {
         setHeight(window.innerHeight - cut_a || 0)
         setWidth(window.innerWidth - cut_b || 0)
      }
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
   }, [])
   return {
      width,
      height,
   }
}
