import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

interface Props {
  submit: Function
  formTitle: string
  formState?: { title: string; content: string }
}
const defaultForm = { title: '', content: '' }

export const PostForm = ({ submit, formTitle, formState }: Props) => {
  const [form, setForm] = useState(formState || defaultForm)

  const onFormChange = ({ target }) =>
    setForm({ ...form, [target.id]: target.value })

  const onSubmit = e => {
    e.preventDefault()
    submit(form)
  }

  return (
    <Row className='justify-content-md-center'>
      <Col md='6'>
        <Card bg='light' className='p-3'>
          <h2>{formTitle}</h2>
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
