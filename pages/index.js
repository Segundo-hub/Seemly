import React from "react"
import { Button, PrincipalTitle } from "components/design/atoms"
import { Layout } from "layout"

const Home = () => (
   <Layout>
      <section className='hero-image'>
         <div className='hero-content'>
            <PrincipalTitle title='Bienvenidos a Seemly' />
            <p>Este es un esfuerzo por querer aportar algo a la comunidad de desarrolladores</p>
         </div>
      </section>
   </Layout>
)

export default Home
