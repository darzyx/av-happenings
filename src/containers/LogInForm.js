import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Form, Message } from 'semantic-ui-react'

import { userAuth } from '../Firebase'

class LogInForm extends Component {
  constructor(props) {
    super(props)

    this.state = { error: null }

    this._handleLogInClick = this._handleLogInClick.bind(this)
  }

  _handleLogInClick(values) {
    userAuth.signInWithEmailAndPassword(values.email, values.password)
      .catch((error) => this.setState({error: error}))
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props
    const disable = pristine || submitting
    const { _handleLogInClick } = this
    const { error } = this.state

    return (
      <Form onSubmit={handleSubmit(_handleLogInClick)}>
        <Form.Group>
          <Form.Field
            component='input'
            control={Field}
            label='Email'
            name='email'
            placeholder='Enter email address'
            type='email'
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
            type='password'
            width={16}
          />
        </Form.Group>
        {
          error &&
          <Message header={error.code} content={error.message} color='red' />
        }
        <Form.Group>
          <Form.Button disabled={disable} type='submit'>Log In</Form.Button>
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
