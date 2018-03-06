import React, { Component } from 'react';
import { Header as Heading, Segment } from 'semantic-ui-react';

export default class NavBar extends Component {
  render() {
    return (
      <Segment attached='top' basic id='nav-bar' inverted>
        <Heading>Antelope Valley Happenings</Heading>
      </Segment>
    );
  };
}
