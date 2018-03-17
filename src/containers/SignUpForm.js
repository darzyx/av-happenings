import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Divider, Form, Message } from 'semantic-ui-react'

import { timestamp, userAuth, usersDB } from '../Firebase'

class SignUpForm extends Component {
  constructor(props) {
    super(props)

    this.state = { error: null, success: false }

    this._handleClearError = this._handleClearError.bind(this)
    this._handleSignUpClick = this._handleSignUpClick.bind(this)
    this._createUserAuthentication = this._createUserAuthentication.bind(this)
    this._createUserDatabaseEntry = this._createUserDatabaseEntry.bind(this)
  }

  _handleClearError = () => this.setState({ error: null })

  _handleSignUpClick = values => this._createUserAuthentication(values)

  _createUserAuthentication(values) {
    const { email, password } = values

    userAuth.createUserWithEmailAndPassword(email, password)
      .then(() => this._createUserDatabaseEntry(values),
        (error) => this.setState({error: error})
      )
  }

  _createUserDatabaseEntry(values) {
    const { username, email } = values
    const { uid } = userAuth.currentUser

    usersDB.doc(uid).set({
      username: username,
      email: email,
      joined: timestamp,
      likeCount: 0,
      eventCount: 0
    }).then(() => this.setState({ success: true }),
      (error) => this.setState({ error: error })
    )
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props
    const { _handleClearError, _handleSignUpClick } = this
    const disable = pristine || submitting
    const { error, success } = this.state

    return (
      <Form
        onChange={_handleClearError}
        onSubmit={handleSubmit(_handleSignUpClick)}
      >
        <Form.Group>
          <Form.Field
            component='input'
            control={Field}
            label='Email'
            name='email'
            placeholder='Your email address'
            type='email'
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
            type='password'
            width={8}
          />
          <Form.Field
            component='input'
            control={Field}
            label='Confirm Password'
            name='confirm'
            placeholder='Confirm your password'
            type='password'
            width={8}
          />
        </Form.Group>
        {
          error &&
          <Message header={error.code} content={error.message} color='red' />
        }
        {
          success &&
          <Message
            header='Success'
            content='You are now signed up!'
            color='green'
          />
        }
        <Divider hidden />
        <Form.Group>
          <Form.Button disabled={disable} type='submit'>Sign Up</Form.Button>
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
