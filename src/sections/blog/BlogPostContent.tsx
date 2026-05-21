import type { Components } from 'react-markdown'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdownComponents: Components = {
  table: ({ children }) => (
    <div className="blog-post-table-wrap">
      <table>{children}</table>
    </div>
  ),
}

type BlogPostContentProps = {
  content: string
}

function isHtmlContent(content: string): boolean {
  const trimmed = content.trim()
  return trimmed.startsWith('<') && trimmed.includes('>')
}

export function BlogPostContent({ content }: BlogPostContentProps) {
  if (isHtmlContent(content)) {
    return (
      <div
        className="blog-post-prose blog-post-prose-html"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    )
  }

  return (
    <div className="blog-post-prose">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
        {content}
      </ReactMarkdown>
    </div>
  )
}
