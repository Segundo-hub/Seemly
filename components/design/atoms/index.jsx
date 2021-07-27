import style from "./at.module.scss"
import Link from "next/link"
import { ViewIcon } from "../../icons/ViewIcon"
import { fiDown } from "../../icons/fiDown"

const space = " "

export const Button = ({ variant = "", text }) => (
   <button className={style.btn + space + (variant === "primary" ? style.btn_primary : style.btn_info)}>{text}</button>
)

export const Title = ({ className = "", title }) => <h2 className={style.title}>{title}</h2>

export const NextLink = ({ className = "", path, text, variant, icon, $click, css }) => {
   if(variant == "dropdown"){
      return <li role="button" className={"navigation-item " + css} onClick={ $click}>
         <div className="dropdown-button off-nav-section md-cross-center">
            <ViewIcon width='18' height='18' icon={icon} className="a-ml-1"/>
            <span>{text}</span>
            <ViewIcon className="dropdown-icon md-to-right" height="1rem" width="1rem" icon={ fiDown }/>
         </div>
      </li>
   }
   else if(variant == 'list'){
      return <li className={css}><Link href={path}><a>{text}</a></Link></li>
   }
   else{
      return <Link href={path}>{text}</Link>
   }
}
