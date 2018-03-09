import React from 'react'
import { Card, Dropdown, Icon, Image, Menu } from 'semantic-ui-react'

const sampleImage = require('../media/example.jpg')

const EventCard = ({ event }) => (
  <Card color='blue'>
    <Image
      label={{ color: 'yellow', content: 'Featured', ribbon: true }}
      src={sampleImage}
    />
    <Card.Content>
      <Dropdown direction='left' pointing='top' style={{ float: 'right' }}>
        <Dropdown.Menu>
          <Dropdown.Item icon='linkify' text='Copy link' />
          <Dropdown.Item icon='warning sign' text='Report' />
          <Dropdown.Item icon='delete' text='Delete' />
        </Dropdown.Menu>
      </Dropdown>
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
