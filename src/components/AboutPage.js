import React from 'react'
import {Container, Divider, Header, Segment} from 'semantic-ui-react'

const AboutPage = () => (
  <Container>
    <Divider hidden />
    <Segment>
      <Header>About</Header>
      <p>
        AV Happenings is a web app for discovering, sharing, and discussing
        community events local to the Antelope Valley.
      </p>
    </Segment>
  </Container>
)

export default AboutPage
