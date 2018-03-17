import React from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  Divider,
  Loader,
  Header as Heading,
  Message
} from 'semantic-ui-react'

import EventModal from '../containers/EventModal'

const sortDescription = {
  top: 'The most liked.',
  hot: 'The most discussed.',
  featured: 'Site-selected happenings.',
  new: 'The most recently submitted.',
  mine: 'Happenings I\'ve shared.'
}

const EventsSection = ({ events, eventsSort, isGetting }) =>
  <React.Fragment>
    <Divider hidden />
    <Heading
      as='h4'
      id='sort-description'
      content={sortDescription[eventsSort]}
      textAlign='center'
    />
    <Divider hidden />
  {
    isGetting ?
    <Loader active content='Loading...' inline='centered' /> :
    events.length === 0 ?
    <center>
      <Message content='No happenings fetched!' header='Empty' />
    </center> :
    <Card.Group doubling itemsPerRow={3} stackable>
    { events.map((event, key) => <EventModal event={event} key={key} />) }
    </Card.Group>
  }
    <Divider hidden />
  </React.Fragment>

EventsSection.propTypes = {
  events: PropTypes.array.isRequired,
  eventsSort: PropTypes.string.isRequired,
  isGetting: PropTypes.bool.isRequired
}

export default EventsSection
