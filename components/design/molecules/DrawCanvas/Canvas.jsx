import { useEffect, useRef, useState } from "react"
//import { Drawing } from "./drawing";

const Canvas = () => {
   const canvasRef = useRef(null)
   useEffect(() => {
      //Drawing('#canvas-container')
   }, [canvasRef])

   return <div ref={canvasRef} id='canvas-container' />
}

module.exports = Canvas
