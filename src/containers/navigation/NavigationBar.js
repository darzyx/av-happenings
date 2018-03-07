import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Header, Segment } from 'semantic-ui-react'
import NavigationModal from './NavigationModal'

export default class NavigationBar extends Component {
  render() {
    return (
      <Segment attached='top' basic id='navigation-bar' inverted>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Header as={Link} inverted to='/'>
                Antelope Valley Happenings
              </Header>
            </Grid.Column>
            <Grid.Column>
              <NavigationModal />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}
