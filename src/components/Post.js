import React, { Component } from 'react'
import { Card, Icon, Menu } from 'semantic-ui-react'

export default class Post extends Component {
  render() {
    const { event } = this.props

    return (
      <Card color='blue'>
        <Card.Content>
          <Card.Header>{event.title}</Card.Header>
          <Card.Meta>
            Event Date and Time
          </Card.Meta>
          <Card.Meta>
            Event Location
          </Card.Meta>
          <Card.Description>
            {event.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Menu secondary widths={2}>
            <Menu.Item>
              <Icon name='heart' /> 100
            </Menu.Item>
            <Menu.Item>
              <Icon name='comments' /> 4
            </Menu.Item>
          </Menu>
        </Card.Content>
      </Card>
    )
  }
}
