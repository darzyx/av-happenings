import React from 'react'
import SubmitForm from '../containers/SubmitForm'
import { Container, Divider, Header, Message, Segment } from 'semantic-ui-react'

const SubmitPage = () => (
  <Container>
    <Divider hidden />
    <Segment attached='top'>
      <Header>Submit</Header>
      <SubmitForm />
    </Segment>
    <Message attached='bottom' color='orange' style={{ textAlign: 'center' }}>
      Please be mindful of the content rules.
    </Message>
  </Container>
)

export default SubmitPage
