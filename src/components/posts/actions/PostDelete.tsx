import Button from 'react-bootstrap/Button'
import React from 'react'
import { usePostDeleteMutation } from '~/generated/graphql'

export const PostDelete = ({ id, setPosts, posts }) => {
  const [deletePost] = usePostDeleteMutation()

  const onDelete = async () => {
    await deletePost({ variables: { id } })
    setPosts(posts.filter(post => post.id !== id))
  }

  return (
    <div>
      <Button size='sm' variant='danger' onClick={onDelete}>
        Delete me!
      </Button>
    </div>
  )
}
