import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Container, Divider, Form, Segment } from 'semantic-ui-react'

class SubmitForm extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props

    return (
      <Container>
        <Segment>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Field
                component='input'
                control={Field}
                label='Name'
                name='name'
                placeholder='Name this happening!'
                type='text'
                width={8}
              />
              <Form.Field
                component='input'
                control={Field}
                label='Date'
                name='date'
                placeholder='When is it?'
                type='text'
                width={8}
              />
            </Form.Group>
            <Form.Group>
              <Form.Field
                component='input'
                control={Field}
                label='Time'
                name='time'
                placeholder='At what time?'
                type='text'
                width={4}
              />
              <Form.Field
                component='input'
                control={Field}
                label='Location'
                name='location'
                placeholder='Where is it?'
                type='text'
                width={12}
              />
            </Form.Group>
            <Divider hidden />
            <Form.Group>
              <Form.TextArea
                component='textarea'
                control={Field}
                label='Description'
                name='description'
                placeholder='Now give us the details!'
                type='text'
                width={16}
              />
            </Form.Group>
            <Divider hidden />
            <Form.Group>
              <Form.Button
                content='Submit'
                disabled={pristine || submitting}
                type='submit'
              />
              <Form.Button
                content='Reset'
                disabled={pristine || submitting}
                onClick={reset}
                type='button'
              />
            </Form.Group>
          </Form>
        </Segment>
      </Container>
    )
  }
}

SubmitForm = reduxForm({ form: 'submit' })(SubmitForm)

export default SubmitForm
