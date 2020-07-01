import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { POSTS_QUERY } from '../../api/queries/posts'
import { HtmlContent } from '../shared/HtmlContent'

export const Posts = () => {
  const { loading, error, data } = useQuery(POSTS_QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return data.posts.map(({ title, content, id, author: { email } }) => (
    <div key={id}>
      <h4>{title}</h4>
      <HtmlContent content={content} />
      <p>{email}</p>
    </div>
  ))
}
