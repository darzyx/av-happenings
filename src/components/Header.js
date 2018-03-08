import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Header as Heading, Segment } from 'semantic-ui-react'
import HeaderModal from '../containers/HeaderModal'

const Header = () => (
  <Segment attached='top' basic id='header' inverted>
    <Grid>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Heading as={Link} inverted to='/'>
            Antelope Valley Happenings
          </Heading>
        </Grid.Column>
        <Grid.Column>
          <HeaderModal />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
)

export default Header
