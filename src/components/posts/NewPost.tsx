import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { PostForm } from './PostForm'
import { usePostCreateMutation } from '~/generated/graphql'

export const NewPost = (_props: RouteComponentProps) => {
  const [createPost] = usePostCreateMutation()

  const onSubmit = form => {
    createPost({ variables: { input: form } })
  }

  return <PostForm submit={onSubmit} formTitle='New Post' />
}
