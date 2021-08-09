const { useState } = require("react")
const { NextLink } = require("../../atoms")

const ExpanBtn = ({ icon, path, link, children, height }) => {
   const [active, setActive] = useState(false)
   const handleClick = () => {
      setActive(!active)
   }

   const styles = {
      height: active ? 14 + height + "px" : 0,
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
         <ul className={`dropdown-container ${active ? "expanded" : "close"}`} style={styles}>
            {children}
         </ul>
      </>
   )
}
module.exports = ExpanBtn
