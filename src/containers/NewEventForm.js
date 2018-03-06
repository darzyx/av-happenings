import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Container, Form, Segment } from 'semantic-ui-react'

class NewEventForm extends Component {
  render() {
    const { handleSubmit } = this.props

    return (
      <Container>
        <Segment>
          <Form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Title</label>
              <Field name="title" component="input" type="text" />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <Field name="description" component="input" type="text" />
            </div>
            <button type="submit">Submit</button>
          </Form>
        </Segment>
      </Container>
    )
  }
}

NewEventForm = reduxForm({ form: 'NewEvent' })(NewEventForm)

export default NewEventForm
