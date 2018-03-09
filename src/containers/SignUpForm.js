import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Divider, Form } from 'semantic-ui-react'

class SignUpForm extends Component {
  _handleSubmitClick(values) {
    console.log(values)
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props
    const disable = pristine || submitting

    return (
      <Form onSubmit={handleSubmit(this._handleSubmitClick)}>
        <Form.Group>
          <Form.Field
            component='input'
            control={Field}
            label='Email'
            name='email'
            placeholder='Your email address'
            type='text'
            width={8}
          />
          <Form.Field
            component='input'
            control={Field}
            label='Username'
            name='username'
            placeholder='Pick a username'
            type='text'
            width={8}
          />
        </Form.Group>
        <Form.Group>
          <Form.Field
            component='input'
            control={Field}
            label='Password'
            name='password'
            placeholder='Pick a password'
            type='text'
            width={8}
          />
          <Form.Field
            component='input'
            control={Field}
            label='Confirm Password'
            name='confirm'
            placeholder='Confirm your password'
            type='text'
            width={8}
          />
        </Form.Group>
        <Divider hidden />
        <Form.Group>
          <Form.Button disabled={disable} type='submit'>
            Sign Up
          </Form.Button>
        </Form.Group>
      </Form>
    )
  }
}

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired
}

SignUpForm = reduxForm({ form: 'signup' })(SignUpForm)

export default connect(null, null)(SignUpForm)
