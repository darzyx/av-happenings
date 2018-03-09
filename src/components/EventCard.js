import React from 'react'
import { Card, Icon, Image, Menu } from 'semantic-ui-react'
import CardDropdown from '../containers/CardDropdown'

const sampleImage = require('../media/example.jpg')

const EventCard = ({ event }) => (
  <Card color='blue'>
    <Image
      label={{ color: 'yellow', content: 'Featured', ribbon: true }}
      src={sampleImage}
    />
    <Card.Content>
      <CardDropdown />
      <Card.Header>{event.title}</Card.Header>
      <Card.Meta>{event.date} @ {event.time}</Card.Meta>
      <Card.Meta>{event.location}</Card.Meta>
      <Card.Description>{event.description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Menu icon='labeled' secondary size='mini' widths={2}>
        <Menu.Item>
          <Icon name='comment outline' />
          8
        </Menu.Item>
        <Menu.Item>
          <Icon name='heart outline' />
          104
        </Menu.Item>
      </Menu>
    </Card.Content>
  </Card>
)

export default EventCard
