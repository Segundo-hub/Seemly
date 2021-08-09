import style from "./at.module.scss"
import Link from "next/link"
import { ViewIcon } from "../../icons/ViewIcon"
import { fiDown } from "../../icons/fiDown"
import { useState } from "react"

const space = " "

export const Button = ({ variant = "", text }) => (
   <button className={style.btn + space + (variant === "primary" ? style.btn_primary : style.btn_info)}>{text}</button>
)

export const Title = ({ className = "", title }) => <h2 className={style.title}>{title}</h2>

export const NextLink = ({ className = "", path, text, variant, icon, $click, css }) => {
   if (variant == "dropdown") {
      return (
         <li role='button' className={"navigation-item " + css} onClick={$click}>
            <div className='dropdown-button off-nav-section md-cross-center'>
               <ViewIcon width='18' height='18' icon={icon} className='a-ml-1' />
               <span>{text}</span>
               <ViewIcon className='dropdown-icon md-to-right' height='1rem' width='1rem' icon={fiDown} />
            </div>
         </li>
      )
   } else if (variant == "list") {
      return (
         <li className={css}>
            <Link href={path}>
               <a>{text}</a>
            </Link>
         </li>
      )
   } else {
      return <Link href={path}>{text}</Link>
   }
}

export const BurgerMenu = ({ click, active }) => {
   return (
      <button className={`burg ${active && "is-active"}`} onClick={click}>
         <span className='burg__dot'></span>
         <span className='burg__dot'></span>
         <span className='burg__dot'></span>
         <span className='burg__dot'></span>
         <span className='burg__dot'></span>
         <span className='burg__dot'></span>
      </button>
   )
}

export const logoIcon = () => (
   <svg xmlns='http://www.w3.org/2000/svg' height='1.5rem' viewBox='0 0 512 512' width='1.5rem'>
      <g>
         <g fill='silver'>
            <path d='m177.958 120.438h156.083v30h-156.083z' />
            <path d='m177.958 361.562h156.083v30h-156.083z' />
            <path d='m156.372 60.156h199.257v30h-199.257z' />
            <path d='m156.372 421.844h199.257v30h-199.257z' />
         </g>
         <path d='m256 421.844h99.628v30h-99.628z' fill='grey' />
         <path d='m256 361.562h78.042v30h-78.042z' fill='grey' />
         <path d='m256 120.438h78.042v30h-78.042z' fill='grey' />
         <path d='m256 60.156h99.628v30h-99.628z' fill='grey' />
         <g>
            <g>
               <path
                  d='m387.865 512c-24.822 0-45.016-20.194-45.016-45.016 0-83.856-50.736-124.445-114.97-175.833-33.208-26.567-70.845-56.676-99.399-95.143-33.215-44.746-49.362-94.137-49.362-150.994.001-24.82 20.195-45.014 45.017-45.014s45.016 20.194 45.016 45.016c0 83.856 50.736 124.445 114.97 175.833 33.208 26.567 70.845 56.676 99.399 95.143 33.215 44.746 49.362 94.137 49.362 150.994-.001 24.82-20.195 45.014-45.017 45.014z'
                  fill='#64e1dc'
               />
            </g>
         </g>
         <path
            d='m284.12 220.848c-9.727-7.782-19.141-15.315-28.12-22.789v115.882c50.313 41.883 86.85 81.885 86.85 153.043 0 24.822 20.194 45.016 45.016 45.016s45.016-20.194 45.016-45.016c0-56.857-16.146-106.248-49.362-150.994-28.555-38.466-66.191-68.575-99.4-95.142z'
            fill='#00c8c7'
         />
         <path
            d='m387.865 0c-24.822 0-45.016 20.194-45.016 45.016 0 83.856-50.736 124.445-114.972 175.834-33.207 26.565-70.843 56.675-99.397 95.141-33.215 44.746-49.362 94.137-49.362 150.994 0 24.822 20.194 45.016 45.016 45.016s45.016-20.194 45.016-45.016c0-83.856 50.736-124.445 114.972-175.834 33.207-26.565 70.843-56.675 99.397-95.141 33.215-44.746 49.362-94.137 49.362-150.994 0-24.822-20.194-45.016-45.016-45.016z'
            fill='#ff8fb8'
         />
         <path
            d='m342.85 45.016c0 71.157-36.536 111.16-86.85 153.043v115.882c8.979-7.475 18.394-15.009 28.122-22.791 33.207-26.565 70.843-56.675 99.397-95.141 33.215-44.746 49.362-94.137 49.362-150.994 0-24.821-20.194-45.015-45.016-45.015s-45.015 20.194-45.015 45.016z'
            fill='#ff5f96'
         />
      </g>
   </svg>
)
