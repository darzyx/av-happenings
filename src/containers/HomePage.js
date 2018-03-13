import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card, Container, Divider, Loader, Message } from 'semantic-ui-react'

import HomeMenu from './HomeMenu'
import EventCard from '../components/EventCard'
import SunIcon from '../components/SunIcon'
import {
  selectEventsSort,
  getEventsIfNeed,
  voidGottenEvents
} from '../actions/eventsActions'

class HomePage extends Component {
  constructor(props) {
    super(props)

    this._handleChangeSort = this._handleChangeSort.bind(this)
    this._handleRefresh = this._handleRefresh.bind(this)
    this._handleMenuClick = this._handleMenuClick.bind(this)
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

  _handleRefresh() {
    const {
      _activeEventsSort,
      _getEventsIfNeed,
      _voidGottenEvents
    } = this.props

    _voidGottenEvents(_activeEventsSort)
    _getEventsIfNeed(_activeEventsSort)
  }

  _handleMenuClick(item) {
    const { _activeEventsSort } = this.props

    if (item === _activeEventsSort) { this._handleRefresh() }
    else { this._handleChangeSort(item) }
  }

  render() {
    const { _activeEventsSort, _events, _isGetting } = this.props
    const noEvents = _events.length === 0
    const { _handleMenuClick } = this

    return (
      <div id='home-page'>
        <HomeMenu
          activeEventsSort={_activeEventsSort}
          handleMenuClick={_handleMenuClick}
        />
        <Divider hidden />
        <Container>
          <Divider hidden />
            {
              _isGetting ?
              <Loader active content='Loading...' inline='centered' /> :
              noEvents ?
              <Message content='No happenings fetched!' header='Empty' /> :
              <Card.Group doubling itemsPerRow={3} stackable>
                {
                  _events.map((event, key) =>
                    <EventCard event={event} key={key} />
                  )
                }
              </Card.Group>
            }
          <Divider hidden />
        </Container>
        <Link to='/submit'><SunIcon /></Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { activeEventsSort, eventsBySort } = state
  const stateProps = {
    _activeEventsSort: activeEventsSort,
    _isGetting: null,
    _events: null
  }

  if (eventsBySort[activeEventsSort]) {
    stateProps._events = eventsBySort[activeEventsSort].items
    stateProps._isGetting = eventsBySort[activeEventsSort].isGetting
  } else {
    stateProps._events = [ ]
    stateProps._isGetting = true
  }

  return stateProps
}

const mapDispatchToProps = dispatch => ({
  _selectEventsSort: eventsSort => dispatch(selectEventsSort(eventsSort)),
  _getEventsIfNeed: eventsSort => dispatch(getEventsIfNeed(eventsSort)),
  _voidGottenEvents: eventsSort => dispatch(voidGottenEvents(eventsSort))
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
