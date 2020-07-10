import React from 'react'
import { PostDelete } from './actions/PostDelete'

export const PostActions = (props: { id; setPosts; posts }) => {
  return (
    <div>
      <PostDelete {...props} />
    </div>
  )
}
