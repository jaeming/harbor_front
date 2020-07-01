import React from 'react'
import { LoginForm, Action } from '../shared/users/LoginForm'
import { RouteComponentProps } from '@reach/router'

export const Register = (_props: RouteComponentProps) => {
  return (
    <main className='m-3'>
      <h2>Register</h2>
      <LoginForm action={Action.register} />
    </main>
  )
}
