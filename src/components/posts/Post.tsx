import React, { Fragment, useEffect, useState } from 'react'
import { RouteComponentProps } from '@reach/router'
import { HtmlContent } from '../shared/HtmlContent'
import { usePostQuery } from '~/generated/graphql'

interface Props extends RouteComponentProps {
  postId?: string
}

export const Post = ({ postId }: Props) => {
  const { loading, error, data } = usePostQuery({
    variables: { id: +postId! }
  })

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error! {error}</div>

  return (
    <Fragment>
      <h4>{data?.post?.title}</h4>
      <HtmlContent content={data?.post?.content} />
      <p>{data?.post?.author.email}</p>
    </Fragment>
  )
}
