import React from 'react'
import { Link } from 'react-router-dom'
import { Header as Heading, Segment } from 'semantic-ui-react'

const WelcomeBanner = () =>
  <Link to='/signup'>
    <Segment id='welcome-banner' inverted raised textAlign='center'>
      <Heading as='h1' inverted>
        Welcome to Antelope Valley Happenings!
        <Heading.Subheader>
          Discover, share, and discuss community submitted events!
          Click to join!
        </Heading.Subheader>
      </Heading>
    </Segment>
  </Link>

export default WelcomeBanner
