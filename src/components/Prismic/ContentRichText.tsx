import { PrismicRichText } from '@prismicio/react'
import * as prismic from '@prismicio/client'

export default function ContentRichText({
  data,
}: {
  data: prismic.RichTextField | null | undefined
}) {
  return (
    <PrismicRichText
      field={data as prismic.RichTextField | null | undefined}
      components={{
        heading1: ({ children }) => (
          <h1 className="mb-5 text-3xl font-bold">{children}</h1>
        ),
        heading2: ({ children }) => (
          <h2 className="mb-3 mt-4 text-2xl font-bold">{children}</h2>
        ),
        heading3: ({ children }) => (
          <h3 className="text-xl font-bold">{children}</h3>
        ),
        heading4: ({ children }) => (
          <h4 className="text-lg font-bold">{children}</h4>
        ),
        heading5: ({ children }) => (
          <h5 className="text-base font-bold">{children}</h5>
        ),
        heading6: ({ children }) => (
          <h6 className="text-sm font-bold">{children}</h6>
        ),
        paragraph: ({ children }) => (
          <p className="mb-3 text-base">{children}</p>
        ),
        preformatted: ({ children }) => <pre>{children}</pre>,
        strong: ({ children }) => (
          <strong className="font-semibold text-brand-green">{children}</strong>
        ),
        em: ({ children }) => <em>{children}</em>,
        listItem: ({ children }) => <li>{children}</li>,
        oListItem: ({ children }) => <li>{children}</li>,
        list: ({ children }) => <ul>{children}</ul>,
        oList: ({ children }) => <ol>{children}</ol>,
        image: ({ node }) => (
          <img
            src={node.url}
            alt={node.alt as ''}
            className="mt-5 h-96 w-full object-cover"
          />
        ),
        hyperlink: ({ children, node }) => (
          <a href={node.data.url} target="_blank" rel="noreferrer">
            {children}
          </a>
        ),
      }}
    />
  )
}
