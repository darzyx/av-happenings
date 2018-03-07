import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getEventsActions } from '../../actions/getEventsActions'
import { Card, Container, Divider } from 'semantic-ui-react'
import HomeMenu from './HomeMenu'
import EventCard from '../../components/EventCard'

class HomePage extends Component {
  componentDidMount() { this.props._getEvents() }

  render() {
    const { error, hasRequested, events } = this.props

    return (
      <div>
        <HomeMenu />
        <Divider hidden />
        <Container>
          <Card.Group doubling itemsPerRow={3} stackable>
          {
            !hasRequested ? <h1>Loading</h1> :
            error ? <h1>There was an error fetching the events</h1> :
            events.map((event, key) => <EventCard event={event} key={key} />)
          }
          </Card.Group>
        </Container>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
