import React, { Fragment } from 'react'
import { RouteComponentProps } from '@reach/router'
import { Router, Link } from '@reach/router'
import { NewPost } from '../posts/NewPost'

export const Manage = (_props: RouteComponentProps) => {
  return (
    <Fragment>
      <header>
        <Link to='/manage/posts/new' className='mr-2'>
          New Post
        </Link>
      </header>
      <Router>
        <NewPost path='/posts/new' />
      </Router>
    </Fragment>
  )
}
