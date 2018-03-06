import React, { Component } from 'react';
import { Card, Container } from 'semantic-ui-react';

const src = require('../media/example.jpg')

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Card.Group itemsPerRow={3}>
          <Card color='red' image={src} />
          <Card color='orange' image={src} />
          <Card color='yellow' image={src} />
          <Card color='olive' image={src} />
          <Card color='green' image={src} />
          <Card color='teal' image={src} />
          <Card color='blue' image={src} />
          <Card color='violet' image={src} />
          <Card color='purple' image={src} />
          <Card color='pink' image={src} />
          <Card color='brown' image={src} />
          <Card color='grey' image={src} />
        </Card.Group>
      </Container>
    )
  }
}
