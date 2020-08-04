import React, { Fragment, useEffect, useState } from 'react'
import { Link } from '@reach/router'
import { RouteComponentProps } from '@reach/router'
import { HtmlContent } from '../shared/HtmlContent'
import { PostActions } from '../posts/PostActions'
import { usePostsQuery } from '~/generated/graphql'

export const Posts = (_props: RouteComponentProps) => {
  const { loading, error, data } = usePostsQuery()
  const [posts, setPosts] = useState(data?.posts)

  useEffect(() => setPosts(data?.posts), [data])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error! {error}</div>

  return (
    <Fragment>
      {posts &&
        posts.map(post => (
          <div key={post.id}>
            <h4>
              <Link to={`posts/${post.id}`}>{post.title}</Link>
            </h4>
            <HtmlContent content={post.content} />
            <p>{post.author.email}</p>
            <PostActions id={post.id} setPosts={setPosts} posts={posts} />
            <hr />
          </div>
        ))}
    </Fragment>
  )
}
