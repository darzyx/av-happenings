import React from 'react'
import { Container, Divider, Header, Message, Segment } from 'semantic-ui-react'
import SignUpForm from '../containers/SignUpForm'

const SignUpPage = () => (
  <Container>
    <Divider hidden />
    <Segment attached='top'>
      <Header>Sign Up</Header>
      <SignUpForm />
    </Segment>
    <Message attached='bottom' color='blue' style={{ textAlign: 'center' }}>
      Have an account? Log In
    </Message>
  </Container>
)

export default SignUpPage
