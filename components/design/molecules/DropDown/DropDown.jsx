const { useState, useRef } = require("react")
const { NextLink } = require("../../atoms")

const ExpanBtn = ({ icon, path, link, children }) => {
   const [active, setActive] = useState(false)
   const [height, setHeight] = useState(0)
   const content = useRef(null)

   const handleClick = () => {
      setActive(!active)
      setHeight(content.current.scrollHeight)
   }

   const styles = {
      height: active ? height + "px" : 0,
      overflow: "hidden",
   }

   return (
      <>
         <NextLink
            css={active ? "expanded" : "close"}
            icon={icon}
            path={path}
            $click={handleClick}
            variant='dropdown'
            text={link}
         />
         <li style={styles} className='animate-dropadown'>
            <ul className={`dropdown-container ${active ? "expanded" : "close"}`} ref={content}>
               {children}
            </ul>
         </li>
      </>
   )
}
module.exports = ExpanBtn
