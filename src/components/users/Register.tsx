import React, { useState, useContext } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { UserContext } from './UserContext'
import { RouteComponentProps } from '@reach/router'
import { useMutation } from '@apollo/react-hooks'
import { REGISTER_MUTATION } from '../../api/mutations/users/register'
import { Auth } from '../../lib/auth'

export const Register = (_props: RouteComponentProps) => {
  const [registerUser] = useMutation(REGISTER_MUTATION)
  const [user, setUser] = useContext(UserContext)
  const [form, setForm] = useState({ email: '', password: '' })

  const onFormChange = ({ target }) =>
    setForm({ ...form, [target.id]: target.value })

  const onSubmit = async e => {
    e.preventDefault()
    const { data } = await registerUser({
      variables: { input: { email: form.email, password: form.password } }
    })
    const id = Auth.store(data.register)
    setUser({ id })
  }

  return (
    <main className='m-3'>
      <h2>Register</h2>
      <Card style={{ width: '30rem' }} bg='light' className='p-3'>
        <Form>
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
        <p>user: {user.id}</p>
      </Card>
    </main>
  )
}
