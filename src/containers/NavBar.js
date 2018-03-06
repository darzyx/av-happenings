import React, { Component } from 'react'
import { Header, Segment } from 'semantic-ui-react'

export default class NavBar extends Component {
  render() {
    return (
      <Segment attached='top' basic id='nav-bar' inverted>
        <Header>Antelope Valley Happenings</Header>
      </Segment>
    )
  }
}
