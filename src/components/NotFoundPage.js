import React from 'react'
import { Container, Divider, Message } from 'semantic-ui-react'

const NotFoundPage = () =>
  <Container text>
    <Divider hidden />
    <center>
      <Message
        header='404'
        content='The page you are looking for does not exist.'
      />
    </center>
  </Container>

export default NotFoundPage
