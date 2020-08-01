import React from 'react'
const xss = require('xss')

interface props {
  content: string | undefined | null
}

export const HtmlContent = ({ content }: props) => {
  const html = { __html: xss(content) }

  return <div dangerouslySetInnerHTML={html}></div>
}
