import React from 'react'
import {
  Container, Divider, Header as Heading, Segment
} from 'semantic-ui-react'

const AboutPage = () => (
  <Container>
    <Divider hidden />
    <Segment>
      <Heading>About</Heading>
      <p>
        AV Happenings is a web app for discovering, sharing, and discussing
        community events local to the Antelope Valley.
      </p>
    </Segment>
  </Container>
)

export default AboutPage
