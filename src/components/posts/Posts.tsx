import React, { Fragment, useEffect, useState } from 'react'
import { RouteComponentProps } from '@reach/router'
import { POSTS_QUERY } from '../../api/gql'
import { useQuery } from '@apollo/react-hooks'
import { HtmlContent } from '../shared/HtmlContent'
import { PostActions } from '../posts/PostActions'

export const Posts = (_props: RouteComponentProps) => {
  const { loading, error, data } = useQuery(POSTS_QUERY)
  const [posts, setPosts] = useState(data?.posts)

  useEffect(() => setPosts(data?.posts), [data])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error! {error}</div>

  return (
    <Fragment>
      {posts &&
        posts.map(post => (
          <div key={post.id}>
            <h4>{post.title}</h4>
            <HtmlContent content={post.content} />
            <p>{post.author.email}</p>
            <PostActions id={post.id} setPosts={setPosts} posts={posts} />
            <hr />
          </div>
        ))}
    </Fragment>
  )
}
