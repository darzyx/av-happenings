import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card, Container, Divider } from 'semantic-ui-react'
import HomeMenu from './HomeMenu'
import EventCard from '../../components/EventCard'
import SunIcon from '../../components/SunIcon'

class HomePage extends Component {
  render() {
    const { error, hasRequested, events } = this.props

    return (
      <div id='home-page'>
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
        <Link to='/submit'>
          <SunIcon />
        </Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { error, hasRequested, events } = state.getEvents
  return { error, hasRequested, events }
}

export default connect(mapStateToProps, null)(HomePage)
