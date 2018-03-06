import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Container, Divider } from 'semantic-ui-react'
import { getEvents } from '../actions/index'
import Post from '../components/Post'

class Dashboard extends Component {
  componentDidMount() { this.props._getEvents() }

  render() {
    const { error, hasRequested, events } = this.props

    return (
      <Container>
        <Divider hidden />
        <Card.Group doubling itemsPerRow={3} stackable>
        {
          !hasRequested ? <h1>Loading</h1> :
          error ? <h1>There was an error fetching the events</h1> :
          events.map((event, key) => <Post event={event} key={key} />)
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
  return { _getEvents: () => { dispatch(getEvents()) }}
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
