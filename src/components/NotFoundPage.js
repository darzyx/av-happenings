import React from 'react'
import {Container, Divider, Header as Heading, Segment} from 'semantic-ui-react'

const NotFoundPage = () => (
  <Container>
    <Divider hidden />
    <Segment>
      <Heading>404</Heading>
      <p>The page you are looking for does not exist.</p>
    </Segment>
  </Container>
)

export default NotFoundPage
