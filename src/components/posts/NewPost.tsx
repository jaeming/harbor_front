import React, { useState } from 'react'
import { RouteComponentProps } from '@reach/router'
import { CREATE_POST_MUTATION } from '../../api/gql'
import { useMutation } from '@apollo/react-hooks'
import { PostForm } from './PostForm'

export const NewPost = (_props: RouteComponentProps) => {
  const [createPost] = useMutation(CREATE_POST_MUTATION)

  const onSubmit = form => {
    createPost({ variables: { input: form } })
  }

  return <PostForm submit={onSubmit} formTitle='New Post' />
}
