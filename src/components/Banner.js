import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Header, Segment } from 'semantic-ui-react'
import UserModal from '../containers/UserModal'
import NavModal from '../containers/NavModal'

const Banner = () => (
  <Segment attached='top' basic id='header' inverted>
    <Grid>
      <Grid.Row columns={2}>
        <Grid.Column width={10}>
          <Header as={Link} inverted to='/'>
            Antelope Valley Happenings
          </Header>
          <br />
          <div>
            <p>Hello, <UserModal />!</p>
          </div>
        </Grid.Column>
        <Grid.Column width={6}>
          <NavModal />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
)

export default Banner
