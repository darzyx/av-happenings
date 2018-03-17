import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Redirect } from 'react-router-dom'
import { Divider, Form, Message } from 'semantic-ui-react'

import { postEventReset, postEventIfValid } from '../actions/eventPostActions'

class SubmitForm extends Component {
  constructor(props) {
    super(props)

    this._handleSubmitClick = this._handleSubmitClick.bind(this)
  }

  componentWillUnmount() {
    this.props._postEventReset()
  }

  _handleSubmitClick(event) {
    const { _postEventIfValid, _user } = this.props

    _postEventIfValid(event, _user)
  }

  render() {
    const {
      handleSubmit,
      _error,
      pristine,
      reset,
      submitting,
      _posted
    } = this.props
    const disable = pristine || submitting
    const { _handleSubmitClick } = this

    return (
      <Form onSubmit={handleSubmit(_handleSubmitClick)}>
        { _posted  && <Redirect to='/' /> }
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
            type='time'
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
        {
          _error.length > 1 &&
          <Message negative>
            <Message.Header>Oops!</Message.Header>
            <p>{_error}</p>
          </Message>
        }
        <Divider hidden />
        <Form.Group>
          <Form.Button disabled={disable} type='submit'>Submit</Form.Button>
          <Form.Button disabled={disable} onClick={reset} type='button'>
            Reset
          </Form.Button>
        </Form.Group>
      </Form>
    )
  }
}

const mapStateToProps = state => ({
  _error: state.eventPost.error,
  _posted: state.eventPost.posted,
  _user: state.user
})

const mapDispatchToProps = dispatch => ({
  _postEventReset: () => dispatch(postEventReset()),
  _postEventIfValid: (event, user) => dispatch(postEventIfValid(event, user))
})

SubmitForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  _postEventReset: PropTypes.func.isRequired,
  _postEventIfValid: PropTypes.func.isRequired,
  _error: PropTypes.string.isRequired,
  _posted: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

SubmitForm = reduxForm({ form: 'submit' })(SubmitForm)

export default connect(mapStateToProps, mapDispatchToProps)(SubmitForm)
