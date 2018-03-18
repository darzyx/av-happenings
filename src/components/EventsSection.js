import React from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  Divider,
  Loader,
  Header as Heading,
  Icon,
  Message
} from 'semantic-ui-react'

import EventModal from '../containers/EventModal'

const sortDescription = {
  top: ['The most liked.', 'heart outline'],
  hot: ['The most discussed.', 'comments outline'],
  featured: ['Site-selected happenings.', 'empty star'],
  new: ['The most recently submitted.', 'clock'],
  mine: ['Happenings I\'ve shared.', 'user outline']
}

const EventsSection = ({ events, eventsSort, isGetting }) =>
  <React.Fragment>
    <Divider hidden />
  {
    isGetting ?
    <Loader active content='Fetching happenings...' inline='centered' /> :
    events.length === 0 ?
    <center>
      <Message content='No happenings fetched!' header='Empty' />
    </center> :
    <React.Fragment>
      <center>
        <Heading as='h2'>
          <Icon id='description-icon' name={sortDescription[eventsSort][1]} />
          <Heading.Subheader id='description-text'>
            {sortDescription[eventsSort][0]}
          </Heading.Subheader>
        </Heading>
      </center>
      <Divider hidden />
      <Card.Group doubling itemsPerRow={3} stackable>
      { events.map((event, key) => <EventModal event={event} key={key} />) }
      </Card.Group>
    </React.Fragment>
  }
    <Divider hidden />
  </React.Fragment>

EventsSection.propTypes = {
  events: PropTypes.array.isRequired,
  eventsSort: PropTypes.string.isRequired,
  isGetting: PropTypes.bool.isRequired
}

export default EventsSection
