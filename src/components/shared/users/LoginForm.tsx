import React, { useState, useContext } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { UserContext } from '../../users/UserContext'
import { useLoginMutation, useRegisterMutation } from '~/generated/graphql'
import { Auth } from '~/lib/auth'

export enum Action {
  login = 'login',
  register = 'register'
}

interface LoginProps {
  action: Action
}

export const LoginForm = ({ action }: LoginProps) => {
  const mutation =
    action === Action.login ? useLoginMutation : useRegisterMutation
  const [loginUser] = mutation()
  const [form, setForm] = useState({ email: '', password: '', name: '' })
  const [user, setUser] = useContext(UserContext)

  const onFormChange = ({ target }) =>
    setForm({ ...form, [target.id]: target.value })

  const onSubmit = async e => {
    e.preventDefault()
    if (action === Action.login) delete form.name
    const { data } = await loginUser({ variables: { input: form } })
    const user = data && Auth.store(data[action])
    user && setUser(user)
  }

  return (
    <Card style={{ width: '30rem' }} bg='light' className='p-3'>
      <Form>
        {action === Action.register && (
          <Form.Group>
            <Form.Control
              id='name'
              type='text'
              placeholder='Enter Name (optional)'
              value={form.name}
              onChange={onFormChange}
            />
          </Form.Group>
        )}
        <Form.Group>
          <Form.Control
            id='email'
            type='email'
            placeholder='Enter email'
            value={form.email}
            onChange={onFormChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            id='password'
            type='password'
            placeholder='Password'
            value={form.password}
            onChange={onFormChange}
          />
        </Form.Group>
        <Button type='submit' onClick={onSubmit}>
          Submit
        </Button>
      </Form>
      <p>user: {JSON.stringify(user)}</p>
    </Card>
  )
}
