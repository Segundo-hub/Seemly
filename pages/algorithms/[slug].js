import { Title } from "../../components/design/atoms"
import { Canvas } from "../../components/design/molecules"
import { Layout } from "../../layout"
import { getMakrdownFiles, getPathDirectories } from "../../lib/markdown"

import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import theme from "../../lib/other/theme"

const Code = {
   code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "")
      return !inline && match ? (
         <SyntaxHighlighter
            style={theme}
            language={match[1]}
            children={String(children).replace(/\n$/, "")}
            {...props}
            className='code-blocks'
            showLineNumbers={true}
         />
      ) : (
         <code className={className} {...props} />
      )
   },
}

const DataEstructures = ({ data, mark }) => {
   console.log(data)
   return (
      <Layout>
         <Title title={data.title} />
         <Canvas />
         <ReactMarkdown components={Code} children={mark} />
      </Layout>
   )
}

export async function getStaticProps({ params }) {
   const { slug } = params
   const { mark, data } = getMakrdownFiles({ directory: "algorithms", file: slug })
   return {
      props: {
         data,
         mark,
      },
   }
}

export async function getStaticPaths() {
   const { dir } = getPathDirectories({ directory: "algorithms" })
   const paths = dir.map(el => ({ params: { slug: el.replace(/\.md$/, "") } }))
   return {
      paths,
      fallback: false,
   }
}

export default DataEstructures
