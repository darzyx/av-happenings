import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { postEventActions } from '../actions/eventsActions'
import { Divider, Form } from 'semantic-ui-react'

class SubmitForm extends Component {
  render() {
    const { handleSubmit, _postEvent, pristine, reset, submitting } = this.props
    const disable = pristine || submitting

    return (
      <Form onSubmit={handleSubmit(_postEvent)}>
        <Form.Group>
          <Form.Field
            component='input'
            control={Field}
            label='Title'
            name='title'
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
          <Form.Button disabled={disable} type='submit'>
            Submit
          </Form.Button>
          <Form.Button disabled={disable} onClick={reset} type='button'>
            Reset
          </Form.Button>
        </Form.Group>
      </Form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return { _postEvent: event => { dispatch(postEventActions(event)) }}
}

SubmitForm = reduxForm({ form: 'submit' })(SubmitForm)

export default connect(null, mapDispatchToProps)(SubmitForm)
