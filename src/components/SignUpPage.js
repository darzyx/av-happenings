import React from 'react'
import {Link} from 'react-router-dom'
import {Container, Divider, Header, Message, Segment} from 'semantic-ui-react'

import SignUpForm from '../containers/SignUpForm'

const SignUpPage = () => (
  <Container>
    <Divider hidden />
    <Segment attached='top'>
      <Header>Sign Up</Header>
      <SignUpForm />
    </Segment>
    <Message attached='bottom' color='orange'>
      <center>Have an account? <Link to='/login'>Log In</Link></center>
    </Message>
  </Container>
)

export default SignUpPage
