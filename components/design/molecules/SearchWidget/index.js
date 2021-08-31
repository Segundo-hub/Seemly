import { fiSearch } from "@icons/Interface"
import { ViewIcon } from "@icons/ViewIcon"

import search from "./s.module.scss"

export const SearchWidget = () => {
   return (
      <form className={search.form}>
         <input type='submit' id='main-search' hidden />
         <label htmlFor='main-search' className={search.button}>
            <ViewIcon icon={fiSearch} />
         </label>
         <input type='seach' placeholder='Que desea buscar' className={search.input} />
      </form>
   )
}
