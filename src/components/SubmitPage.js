import React from 'react'
import SubmitForm from '../containers/SubmitForm'
import { Container, Divider, Header, Segment } from 'semantic-ui-react'

const SubmitPage = () => (
  <Container>
    <Divider hidden />
    <Segment>
      <Header>Submit</Header>
      <SubmitForm />
    </Segment>
  </Container>
)

export default SubmitPage
