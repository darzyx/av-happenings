import React from 'react'
import { Card, Divider, Loader, Message } from 'semantic-ui-react'

import EventModal from '../containers/EventModal'

const EventsSection = ({ events, isGetting }) =>
  <React.Fragment>
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

export default EventsSection
