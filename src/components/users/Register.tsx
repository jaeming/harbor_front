import React, { Fragment } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { RouteComponentProps } from '@reach/router'

export const Register = (_props: RouteComponentProps) => (
  <main className='m-3'>
    <h2>Register</h2>
    <Card style={{ width: '30rem' }} bg='light' className='p-3'>
      <Form>
        <Form.Group>
          <Form.Control type='email' placeholder='Enter email' />
        </Form.Group>
        <Form.Group>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <Button type='submit'>Submit</Button>
      </Form>
    </Card>
  </main>
)
