import React, { Fragment } from 'react'
import { RouteComponentProps } from '@reach/router'
import { POSTS_QUERY } from '../../api/gql'
import { useQuery } from '@apollo/react-hooks'
import { HtmlContent } from '../shared/HtmlContent'

export const Posts = (_props: RouteComponentProps) => {
  const { loading, error, data } = useQuery(POSTS_QUERY, {
    fetchPolicy: 'network-only'
  })

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error! {error}</div>

  return (
    <Fragment>
      {data.posts.map(post => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <HtmlContent content={post.content} />
          <p>{post.author.email}</p>
        </div>
      ))}
    </Fragment>
  )
}
