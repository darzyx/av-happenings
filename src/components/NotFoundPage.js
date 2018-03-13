import React from 'react'
import {Container, Divider, Header, Segment} from 'semantic-ui-react'

const NotFoundPage = () => (
  <Container>
    <Divider hidden />
    <Segment>
      <Header>404</Header>
      <p>The page you are looking for does not exist.</p>
    </Segment>
  </Container>
)

export default NotFoundPage
