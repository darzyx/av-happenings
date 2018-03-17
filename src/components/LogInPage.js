import React from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  Divider,
  Header as Heading,
  Message,
  Segment
} from 'semantic-ui-react'

import LogInForm from '../containers/LogInForm'

const LogInPage = () =>
  <Container text>
    <Divider hidden />
    <Segment attached='top'>
      <Heading as='h2' content='Log In' subheader='Welcome back!' />
      <LogInForm />
    </Segment>
    <Message attached='bottom' color='orange'>
      <center>New here? <Link to='/signup'>Sign Up</Link></center>
    </Message>
  </Container>

export default LogInPage
