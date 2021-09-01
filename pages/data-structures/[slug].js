import { Title } from "components/design/atoms"
import { Layout } from "layout"
import { getMarkdownFiles, getPathDirectories } from "lib/markdown"
import ReactMarkdown from "react-markdown"
import { CodeMark } from "components/design/organisms/CodeMark"

const DataEstructures = ({ data, mark }) => {
   return (
      <Layout>
         <Title title={data.title} />

         <section className='l-section'>
            <ReactMarkdown components={CodeMark} children={mark} />
         </section>
      </Layout>
   )
}

export async function getStaticProps({ params }) {
   const { slug } = params
   const { mark, data } = getMarkdownFiles({ directory: "data-structures", file: slug })
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
