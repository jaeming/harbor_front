import Button from 'react-bootstrap/Button'
import React, { useState } from 'react'
import { PostForm } from '../PostForm'
import { useMutation } from '@apollo/react-hooks'
import { UPDATE_POST_MUTATION } from '../../../api/gql'

export const PostEdit = ({ id, _setPosts, posts }) => {
  const [updatePost] = useMutation(UPDATE_POST_MUTATION)
  const [showForm, setShowForm] = useState(false)
  const formState = posts.find(post => post.id === id)

  const onEdit = async () => {
    setShowForm(true)
  }

  const submit = async ({ title, content, published }) => {
    updatePost({ variables: { id, input: { title, content, published } } })
  }

  const props = { formState, submit, formTitle: 'Edit Post' }
  return (
    <div>
      <Button size='sm' onClick={onEdit}>
        Edit
      </Button>
      {showForm && <PostForm {...props} />}
    </div>
  )
}
