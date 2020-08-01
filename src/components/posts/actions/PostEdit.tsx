import Button from 'react-bootstrap/Button'
import React, { useState } from 'react'
import { PostForm } from '../PostForm'
import { usePostUpdateMutation } from '~/generated/graphql'

export const PostEdit = ({ id, posts }) => {
  const [updatePost] = usePostUpdateMutation()
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
