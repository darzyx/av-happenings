import React from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  Divider,
  Header as Heading,
  Message,
  Segment
} from 'semantic-ui-react'

import SignUpForm from '../containers/SignUpForm'

const SignUpPage = () =>
  <Container>
    <Divider hidden />
    <Segment attached='top'>
      <Heading>
        Sign Up
        <Heading.Subheader>
          Wohoo! Glad you decided to join us! :)
        </Heading.Subheader>
      </Heading>
      <SignUpForm />
    </Segment>
    <Message attached='bottom' color='orange'>
      <center>Have an account? <Link to='/login'>Log In</Link></center>
    </Message>
  </Container>

export default SignUpPage
