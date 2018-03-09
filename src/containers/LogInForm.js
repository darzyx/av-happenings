import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Divider, Form } from 'semantic-ui-react'

class LogInForm extends Component {
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
            placeholder='Enter email address'
            type='text'
            width={16}
          />
        </Form.Group>
        <Form.Group>
          <Form.Field
            component='input'
            control={Field}
            label='Password'
            name='password'
            placeholder='Enter password'
            type='text'
            width={16}
          />
        </Form.Group>
        <Divider hidden />
        <Form.Group>
          <Form.Button disabled={disable} type='submit'>
            Log In
          </Form.Button>
        </Form.Group>
      </Form>
    )
  }
}

LogInForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired
}

LogInForm = reduxForm({ form: 'login' })(LogInForm)

export default connect(null, null)(LogInForm)
