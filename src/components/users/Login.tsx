import React from 'react'
import { LoginForm, Action } from '../shared/users/LoginForm'
import { RouteComponentProps } from '@reach/router'

export const Login = (_props: RouteComponentProps) => {
  return (
    <main className='m-3'>
      <h2>Login</h2>
      <LoginForm action={Action.login} />
    </main>
  )
}
