import React from 'react'
import PropTypes from 'prop-types'
import { Card, Icon, Image, Menu } from 'semantic-ui-react'
import EventDropdown from './EventDropdown'

const sampleImage = require('../media/example.jpg')

const EventCard = ({ event }) => (
  <Card color='blue'>
    <Image
      label={{ color: 'yellow', content: 'Featured', ribbon: true }}
      src={sampleImage}
    />
    <Card.Content>
      <EventDropdown />
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

EventCard.propTypes = {
  event: PropTypes.object.isRequired
}

export default EventCard
