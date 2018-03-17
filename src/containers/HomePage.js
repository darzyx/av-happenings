import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import HomeMenu from './HomeMenu'
import SunIcon from '../components/SunIcon'
import WelcomeBanner from '../components/WelcomeBanner'
import EventsSection from '../components/EventsSection'
import { selectEventsSort, voidGottenEvents } from '../actions/eventMiscActions'
import { getEventsIfNeed } from '../actions/eventGetActions'

class HomePage extends Component {
  constructor(props) {
    super(props)

    this._handleChangeSort = this._handleChangeSort.bind(this)
    this._handleRefresh = this._handleRefresh.bind(this)
    this._handleMenuClick = this._handleMenuClick.bind(this)
  }

  componentDidMount() {
    const { _eventsSort, _getEventsIfNeed, _user } = this.props

    _getEventsIfNeed(_eventsSort, _user)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps._eventsSort !== this.props._eventsSort) {
      const { _eventsSort, _getEventsIfNeed, _user } = nextProps

      _getEventsIfNeed(_eventsSort, _user)
    }
  }

  _handleChangeSort(nextEventsSort) {
    this.props._selectEventsSort(nextEventsSort)

    window.scrollTo(0, 0)
  }

  _handleRefresh() {
    const {
      _eventsSort,
      _getEventsIfNeed,
      _voidGottenEvents,
      _user
    } = this.props

    _voidGottenEvents(_eventsSort)

    _getEventsIfNeed(_eventsSort, _user)
  }

  _handleMenuClick(item) {
    const { _eventsSort } = this.props

    if (item === _eventsSort) { this._handleRefresh() }
    else { this._handleChangeSort(item) }
  }

  render() {
    const { _eventsSort, _events, _isGetting, _user } = this.props
    const { _handleMenuClick } = this

    return (
      <div id='home-page'>
        <HomeMenu
          eventsSort={_eventsSort}
          handleMenuClick={_handleMenuClick}
          loggedIn={_user.loggedIn}
        />
        <Container>
          <WelcomeBanner loggedIn={_user.loggedIn} />
          <EventsSection
            isGetting={_isGetting}
            events={_events}
            eventsSort={_eventsSort}
          />
        </Container>
        <Link to='/submit'><SunIcon /></Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { eventsSort, eventsBySort, user } = state
  const stateProps = {
    _eventsSort: eventsSort,
    _user: user,
    _isGetting: null,
    _events: null,
  }

  if (eventsBySort[eventsSort]) {
    stateProps._events = eventsBySort[eventsSort].items
    stateProps._isGetting = eventsBySort[eventsSort].isGetting
  } else {
    stateProps._events = [ ]
    stateProps._isGetting = true
  }

  return stateProps
}

const mapDispatchToProps = dispatch => ({
  _selectEventsSort: eventsSort => dispatch(selectEventsSort(eventsSort)),
  _getEventsIfNeed: (eventsSort, user) => {
    dispatch(getEventsIfNeed(eventsSort, user))
  },
  _voidGottenEvents: eventsSort => dispatch(voidGottenEvents(eventsSort))
})

HomePage.propTypes = {
  _eventsSort: PropTypes.string.isRequired,
  _user: PropTypes.object.isRequired,
  _events: PropTypes.array.isRequired,
  _isGetting: PropTypes.bool.isRequired,
  _selectEventsSort: PropTypes.func.isRequired,
  _getEventsIfNeed: PropTypes.func.isRequired,
  _voidGottenEvents: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
