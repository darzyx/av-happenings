import React from 'react'
import { Container, Divider, Header, Message, Segment } from 'semantic-ui-react'
import LogInForm from '../containers/LogInForm'

const LogInPage = () => (
  <Container>
    <Divider hidden />
    <Segment attached='top'>
      <Header>Log In</Header>
      <LogInForm />
    </Segment>
    <Message attached='bottom' color='blue' style={{ textAlign: 'center' }}>
      New here? Sign Up
    </Message>
  </Container>
)

export default LogInPage
