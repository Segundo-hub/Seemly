import { NextLink } from "../../atoms"
import { fiTree } from "../../../icons/fiTree"
import { fiStack } from "../../../icons/fiStack"
import { fiMount } from "../../../icons/fiMount"
import { fiPattern } from "../../../icons/fiPattern"
import { DropDown } from ".."

export const Menu = () => (
   <nav className='main-menu'>
      <ul className='main-nav'>
         <DropDown link='Estructura de Datos' icon={fiTree} height={42 * 5}>
            <div className='dropdown--list'>
               <NextLink path='/data-structures/linked-list' text='Linked List' variant='list' css='link--item' />
               <NextLink path='/data-structures/queue' text='Queue' variant='list' css='link--item' />
               <NextLink path='/data-structures/stack' text='Stack' variant='list' css='link--item' />
               <NextLink path='/data-structures/binary-tree' text='Binary Tree' variant='list' css='link--item' />
               <NextLink path='/data-structures/graph' text='Graph' variant='list' css='link--item' />
            </div>
         </DropDown>

         <DropDown link='Algoritmos' icon={fiStack} height={42 * 2}>
            <div className='dropdown--list'>
               <NextLink path='/algorithms/buble-sort' text='Budle Sort' variant='list' css='link--item' />
               <NextLink path='/algorithms/binary-search' text='Binary Search' variant='list' css='link--item' />
            </div>
         </DropDown>

         <DropDown link='Patrones de Diseño' icon={fiMount} height={42 * 3 + 3}>
            <div className='dropdown--list:child'>
               <DropDown link='Estructure Patterns ' icon={fiPattern} height={42 * 2}>
                  <div className='dropdown--list'>
                     <NextLink path='/design-patterns/' text='Stack' variant='list' css='link--item' />
                     <NextLink path='/design-patterns/' text='Binary Tree' variant='list' css='link--item' />
                  </div>
               </DropDown>

               <DropDown link='Estructure Patterns ' icon={fiPattern} height={42 * 2}>
                  <div className='dropdown--list'>
                     <NextLink path='/design-patterns/' text='Stack' variant='list' css='link--item' />
                     <NextLink path='/design-patterns/' text='Binary Tree' variant='list' css='link--item' />
                  </div>
               </DropDown>

               <DropDown link='Estructure Patterns ' icon={fiPattern} height={42 * 2}>
                  <div className='dropdown--list'>
                     <NextLink path='/design-patterns/' text='Stack' variant='list' css='link--item' />
                     <NextLink path='/design-patterns/' text='Binary Tree' variant='list' css='link--item' />
                  </div>
               </DropDown>
            </div>
         </DropDown>
      </ul>
   </nav>
)
