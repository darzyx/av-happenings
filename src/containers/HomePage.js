import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  selectEventsSort,
  getEventsIfNeed,
  voidGottenEvents
} from '../actions/eventsActions'
import { Link } from 'react-router-dom'
import { Button, Card, Container, Divider } from 'semantic-ui-react'
import HomeMenu from '../components/HomeMenu'
import EventCard from '../components/EventCard'
import SunIcon from '../components/SunIcon'

class HomePage extends Component {
  constructor(props) {
    super(props)

    this._handleChangeSort = this._handleChangeSort.bind(this)
    this._handleRefresh = this._handleRefresh.bind(this)
  }

  componentDidMount() {
    const { _activeEventsSort, _getEventsIfNeed } = this.props

    _getEventsIfNeed(_activeEventsSort)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps._activeEventsSort !== this.props._activeEventsSort) {
      const { _activeEventsSort, _getEventsIfNeed } = nextProps

      _getEventsIfNeed(_activeEventsSort)
    }
  }

  _handleChangeSort(nextEventsSort) {
    this.props._selectEventsSort(nextEventsSort)
    window.scrollTo(0, 0)
  }

  _handleRefresh(e) {
    const {
      _activeEventsSort,
      _voidGottenEvents,
      _getEventsIfNeed
    } = this.props

    _voidGottenEvents(_activeEventsSort)
    _getEventsIfNeed(_activeEventsSort)
  }

  render() {
    const { _activeEventsSort, _events, _isGetting } = this.props
    const noEvents = _events.length === 0

    return (
      <div id='home-page'>
        <HomeMenu
          activeEventsSort={_activeEventsSort}
          handleChangeSort={this._handleChangeSort}
        />
        <Divider hidden />
        <Container>
          {
            !_isGetting &&
            <Button fluid onClick={this._handleRefresh}>Refresh</Button>
          }
          <Divider hidden />
          <Card.Group doubling itemsPerRow={3} stackable>
            {
              noEvents ?
              (_isGetting ? <h1>Loading...</h1> : <h1>Empty.</h1>) :
              _events.map((event, key) => <EventCard event={event} key={key} />)
            }
          </Card.Group>
          <Divider hidden />
          {
            !_isGetting &&
            <Button fluid>Load More</Button>
          }
        </Container>
        <Divider hidden />
        <Link to='/submit'>
          <SunIcon />
        </Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { activeEventsSort, eventsBySort } = state

  if (eventsBySort[activeEventsSort]) {
    const { isGetting, items } = eventsBySort[activeEventsSort]

    return {
      _activeEventsSort: activeEventsSort,
      _events: items,
      _isGetting: isGetting
    }
  } else {
    return {
      _activeEventsSort: activeEventsSort,
      _events: [ ],
      _isGetting: true
    }
  }
}

const mapDispatchToProps = dispatch => ({
  _selectEventsSort: eventsSort => { dispatch(selectEventsSort(eventsSort)) },
  _getEventsIfNeed: eventsSort => { dispatch(getEventsIfNeed(eventsSort)) },
  _voidGottenEvents: eventsSort => { dispatch(voidGottenEvents(eventsSort)) }
})

HomePage.propTypes = {
  _activeEventsSort: PropTypes.string.isRequired,
  _events: PropTypes.array.isRequired,
  _isGetting: PropTypes.bool.isRequired,
  _selectEventsSort: PropTypes.func.isRequired,
  _getEventsIfNeed: PropTypes.func.isRequired,
  _voidGottenEvents: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
