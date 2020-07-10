import Button from 'react-bootstrap/Button'
import React from 'react'
import { useMutation } from '@apollo/react-hooks'
import { DELETE_POST_MUTATION } from '../../api/gql'

export const PostActions = ({ id, setPosts, posts }) => {
  const [deletePost] = useMutation(DELETE_POST_MUTATION)

  const onDelete = async () => {
    await deletePost({ variables: { input: { id } } })
    setPosts(posts.filter(post => post.id !== id))
  }

  return (
    <div>
      <Button size='sm' variant='danger' onClick={onDelete}>
        Delete
      </Button>
    </div>
  )
}
