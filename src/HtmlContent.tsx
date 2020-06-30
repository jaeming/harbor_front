import React from 'react'
const xss = require('xss')

interface props {
  content: string
}

export const HtmlContent = ({ content }: props) => {
  const html = { __html: xss(content) }

  return (
    <div dangerouslySetInnerHTML={html}></div>
  )
}
