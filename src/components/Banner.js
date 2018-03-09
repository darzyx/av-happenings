import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Header, Segment } from 'semantic-ui-react'
import BannerModal from '../containers/BannerModal'

const Banner = () => (
  <Segment attached='top' basic id='header' inverted>
    <Grid>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Header as={Link} inverted to='/'>
            Antelope Valley Happenings
          </Header>
        </Grid.Column>
        <Grid.Column>
          <BannerModal />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
)

export default Banner
