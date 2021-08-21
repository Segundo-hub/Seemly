import { useEffect } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import theme from "./../../../../lib/other/theme.js"

export const CodeMark = {
   code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "")
      return !inline && match ? (
         <SyntaxHighlighter
            data-lang={match[1]}
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
