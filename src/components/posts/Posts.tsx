import React, { useContext, useEffect, Fragment } from 'react'
import { RouteComponentProps } from '@reach/router'
import { client } from '../../api/apollo_client'
import { POSTS_QUERY } from '../../api/gql'
import { HtmlContent } from '../shared/HtmlContent'
import { PostsContext } from './PostsContext'

export const Posts = (_props: RouteComponentProps) => {
  const [posts, setPosts] = useContext(PostsContext)
  useEffect(() => {
    client.query({ query: POSTS_QUERY }).then(res => setPosts(res.data.posts))
  }, [])

  return (
    <Fragment>
      {posts.map(({ title, content, id, author: { email } }) => (
        <div key={id}>
          <h4>{title}</h4>
          <HtmlContent content={content} />
          <p>{email}</p>
        </div>
      ))}
    </Fragment>
  )
}
