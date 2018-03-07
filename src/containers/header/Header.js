import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Header as Heading, Segment } from 'semantic-ui-react'
import HeaderModal from './HeaderModal'

export default class Header extends Component {
  render() {
    return (
      <Segment attached='top' basic id='navigation-bar' inverted>
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
  }
}
