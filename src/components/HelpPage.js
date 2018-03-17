import React from 'react'
import {
  Container,
  Divider,
  Header as Heading,
  Segment
} from 'semantic-ui-react'

const HelpPage = () =>
  <Container text>
    <Divider hidden />
    <Segment padded='very'>
      <Heading as='h2'>How can we help you?</Heading>
      <p>Get started with AV Happenings.</p>
    </Segment>
  </Container>

export default HelpPage
