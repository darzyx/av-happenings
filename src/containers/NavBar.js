import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react';

export default class NavBar extends Component {
  render() {
    return (
      <Segment basic id='heading' inverted>
        <Header>Antelope Valley Happenings</Header>
      </Segment>
    );
  };
}
