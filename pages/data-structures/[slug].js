import { Title } from "../../components/design/atoms"
import { Canvas } from "../../components/design/molecules"
import { Layout } from "../../layout"
import { getMakrdownFiles, getPathDirectories } from "../../lib/markdown"

const DataEstructures = ({ data, mark }) => {
   console.log(data)
   return (
      <Layout>
         <Title title={data.title} />
         <Canvas />
      </Layout>
   )
}

export async function getStaticProps({ params }) {
   const { slug } = params
   const { mark, data } = getMakrdownFiles({ directory: "data-structures", file: slug })
   return {
      props: {
         data,
         mark,
      },
   }
}

export async function getStaticPaths() {
   const { dir } = getPathDirectories({ directory: "data-structures" })
   const paths = dir.map(el => ({ params: { slug: el.replace(/\.md$/, "") } }))
   return {
      paths,
      fallback: false,
   }
}

export default DataEstructures
