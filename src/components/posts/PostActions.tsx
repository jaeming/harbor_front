import React from 'react'
import { PostDelete } from './actions/PostDelete'
import { PostEdit } from './actions/PostEdit'

export const PostActions = (props: { id; setPosts; posts }) => {
  return (
    <div>
      <PostDelete {...props} />
      <PostEdit {...props} />
    </div>
  )
}
