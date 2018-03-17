import React from 'react'
import {
  Container,
  Divider,
  Header as Heading,
  Segment
} from 'semantic-ui-react'

const AboutPage = () =>
  <Container>
    <Divider hidden />
    <Segment id='about-banner' inverted textAlign='center'>
      <Heading as='h1'>
        By the community, for the community.
      </Heading>
    </Segment>
    <Segment padded='very'>
      <Heading as='h2'>
        About
      </Heading>
      <p>
        AV Happenings is a web app for discovering, sharing, and discussing
        community events local to the Antelope Valley.
      </p>
    </Segment>
  </Container>


export default AboutPage
