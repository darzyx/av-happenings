import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Container } from 'semantic-ui-react'
import { getEventsActions } from '../actions/getEventsActions'
import EventCard from '../components/EventCard'

class Dashboard extends Component {
  componentDidMount() { this.props._getEvents() }

  render() {
    const { error, hasRequested, events } = this.props

    return (
      <Container>
        <Card.Group doubling itemsPerRow={3} stackable>
        {
          !hasRequested ? <h1>Loading</h1> :
          error ? <h1>There was an error fetching the events</h1> :
          events.map((event, key) => <EventCard event={event} key={key} />)
        }
        </Card.Group>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  const { error, hasRequested, events } = state.getEvents
  return { error, hasRequested, events }
}

const mapDispatchToProps = dispatch => {
  return { _getEvents: () => { dispatch(getEventsActions()) }}
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
