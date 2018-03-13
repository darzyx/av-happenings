import React from 'react'
import {Link} from 'react-router-dom'
import {Header, Segment} from 'semantic-ui-react'

const WelcomeBanner = () => (
  <Link to='/signup'>
    <Segment id='welcome-banner' inverted raised textAlign='center'>
      <Header inverted>
        Welcome to Antelope Valley Happenings!
        <Header.Subheader>
          Discover, share, and discuss community submitted events!
          Click to join!
        </Header.Subheader>
      </Header>
    </Segment>
  </Link>
)

export default WelcomeBanner
