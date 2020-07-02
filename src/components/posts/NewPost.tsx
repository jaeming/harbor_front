import React, { useState } from 'react'
import { RouteComponentProps } from '@reach/router'
import { CREATE_POST_MUTATION } from '../../api/gql'
import { useMutation } from '@apollo/react-hooks'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const NewPost = (_props: RouteComponentProps) => {
  const [form, setForm] = useState({ title: '', content: '' })
  const [createPost, { data, error }] = useMutation(CREATE_POST_MUTATION)

  const onFormChange = ({ target }) =>
    setForm({ ...form, [target.id]: target.value })

  const onSubmit = async e => {
    e.preventDefault()
    await createPost({ variables: { input: form } })
    console.log(data, error)
  }

  return (
    <Row className='justify-content-md-center'>
      <Col md='6'>
        <Card bg='light' className='p-3'>
          <h2>New Post</h2>
          <Form>
            <Form.Group>
              <Form.Control
                id='title'
                type='text'
                placeholder='Post Title'
                value={form.title}
                onChange={onFormChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                id='content'
                type='text'
                placeholder='Post Content'
                value={form.content}
                onChange={onFormChange}
              />
            </Form.Group>
            <Form.Group>
              <Button type='submit' onClick={onSubmit}>
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Card>
      </Col>
    </Row>
  )
}
