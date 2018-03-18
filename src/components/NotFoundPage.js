import React from 'react'
import { Container, Divider, Image, Message } from 'semantic-ui-react'

const tumbleweedImg = require('../media/tumbleweed.png')

const NotFoundPage = () =>
  <Container text>
    <Divider hidden />
    <center>
      <Message
        header='Oops! You took a wrong turn.'
        content={'The page ' + window.location.pathname + ' does not exist.'}
      />
      <Image src={tumbleweedImg} size='medium' />
    </center>
  </Container>

export default NotFoundPage
