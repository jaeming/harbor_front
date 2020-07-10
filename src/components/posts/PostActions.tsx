import Button from 'react-bootstrap/Button'
import React from 'react'
import { PostDelete } from './actions/PostDelete'

interface ActionProps {
  id
  setPosts
  posts
}

export const PostActions = (props: ActionProps) => {
  return (
    <div>
      <PostDelete {...props} />
    </div>
  )
}
