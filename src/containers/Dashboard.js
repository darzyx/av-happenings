import React, { Component } from 'react'
import { Card, Container, Divider } from 'semantic-ui-react'
import Post from '../components/Post';

export default class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Divider hidden />
        <Card.Group doubling itemsPerRow={3} stackable>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </Card.Group>
      </Container>
    )
  }
}
