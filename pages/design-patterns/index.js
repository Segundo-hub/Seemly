import React from "react"
import { NextLink } from "components/design/atoms"
import { Layout } from "layout"

const DataStructures = () => (
   <Layout>
      <div className='dropdown--list'>
         <NextLink path='/data-structures/linked-list' text='Linked List' css='link--item' />
         <NextLink path='/data-structures/queue' text='Queue' css='link--item' />
         <NextLink path='/data-structures/stack' text='Stack' css='link--item' />
         <NextLink path='/data-structures/binary-tree' text='Binary Tree' css='link--item' />
         <NextLink path='/data-structures/graph' text='Graph' css='link--item' />
      </div>
   </Layout>
)

export default DataStructures
