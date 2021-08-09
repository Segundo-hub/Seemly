
const svgProp = {
   width: 24,
   height: 24,
   path: '',
} 

export const ViewIcon = ({ className ="", icon = svgProp, fill, width, height }) => (
   <svg xmlns="http://www.w3.org/2000/svg" width={ height || icon.height } height={ width || icon.width }
      viewBox={`0 0 ${ icon.height } ${ icon.width }`}
      className={className}
   >
      {
         typeof icon.path === 'object'
         ? icon.path.map((el, index) => <path key={ index } d={ el } fill={ fill || 'currentColor' }/>)
         : <path fill={ fill || 'currentColor' } d={ icon.path }/>
      }
   </svg>
)
