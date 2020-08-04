import React, { Fragment } from 'react'
import { RouteComponentProps } from '@reach/router'
import { Router, Link } from '@reach/router'
import { NewPost } from '../posts/NewPost'
import { Posts } from '../posts/Posts'
import { Post } from '../posts/Post'

export const Manage = (_props: RouteComponentProps) => {
  return (
    <Fragment>
      <header>
        <Link to='/manage/posts/new' className='mr-2'>
          New Post
        </Link>
      </header>
      <Router>
        <Posts path='/' />
        <NewPost path='/posts/new' />
        <Post path='/posts/:postId' />
      </Router>
    </Fragment>
  )
}
