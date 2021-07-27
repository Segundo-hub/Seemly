import ReactMarkdown from "react-markdown"
import { getMakrdownFiles } from "../../lib/markdown"
import { Layout } from "../../layout"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
//import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism"

const Code = {
   code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "")
      return !inline && match ? (
         <SyntaxHighlighter
            //style={darcula}
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

const Blog = ({ posts, files, data, mark }) => (
   <Layout>
      <ul>
         {files.map(post => (
            <li key={post}>{post}</li>
         ))}
      </ul>
      <ReactMarkdown components={Code} children={mark} />
   </Layout>
)

export async function getStaticProps(context) {
   const res = await fetch("https://jsonplaceholder.typicode.com/posts")
   const posts = await res.json()
   const { files, data, mark } = getMakrdownFiles({ directory: "algorithms", file: "algorithms" })
   return {
      props: {
         posts,
         files,
         data,
         mark,
      },
   }
}

export default Blog
