import React from 'react'
import { Card, Icon, Menu } from 'semantic-ui-react'

const EventCard = ({ event }) => (
  <Card color='blue'>
    <Card.Content>
      <Card.Header>{event.title}</Card.Header>
      <Card.Meta>{event.date} @ {event.time}</Card.Meta>
      <Card.Meta>{event.location}</Card.Meta>
      <Card.Description>{event.description}</Card.Description>
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

export default EventCard
