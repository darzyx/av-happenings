import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Card, Icon, Image, Menu } from 'semantic-ui-react'
import TimeAgo from 'react-timeago'

import '../styles/EventCard.css'
import { likeEvent } from '../actions/likeActions'
import EventDropdown from './EventDropdown'

class EventCard extends Component {
  constructor(props) {
    super(props)

    this.state = { redirectToLogin: false }

    this._handleLikeClick = this._handleLikeClick.bind(this)
    this._handleCommentClick = this._handleCommentClick.bind(this)
  }

  _handleLikeClick() {
    const { _likeEvent, _user } = this.props
    const { id } = this.props.event

    if (_user.loggedIn) { _likeEvent(id, _user.uid) }
    else { this.setState({ redirectToLogin: true }) }
  }

  _handleCommentClick() {
    const { _user, handleTriggerClick } = this.props

    if (_user.loggedIn) { handleTriggerClick() }
    else { this.setState({ redirectToLogin: true }) }
  }

  render() {
    const { _handleCommentClick, _handleLikeClick } = this
    const { redirectToLogin } = this.state
    const { event, eventImage, handleTriggerClick } = this.props
    const {
      title,
      date,
      location,
      commentCount,
      likeCount,
      featured,
      time,
      timestamp,
      username,
      uid,
      id
    } = event

    return (
      <Card>
        {redirectToLogin && <Redirect to='/login' />}
        <Image
          alt='happening image'
          className='card-image'
          label={
            featured ?
            {color: 'yellow', content: 'Featured!', ribbon: true} :
            null
          }
          onClick={handleTriggerClick}
          src={eventImage}
        />
        <Card.Content>
          <EventDropdown
            eventUID={uid}
            eventID={id}
            handleTriggerClick={handleTriggerClick}
          />
          <Card.Header className='card-header' onClick={handleTriggerClick}>
            {title}
          </Card.Header>
          <Card.Meta>{date} @ {time}</Card.Meta>
          <Card.Meta>{location}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Menu icon='labeled' secondary size='mini' widths={2}>
            <Menu.Item className='icon-wrapper' onClick={_handleCommentClick}>
              <Icon className='comment-icon' name='comment outline' />
              <p className='comment-text'>{commentCount}</p>
            </Menu.Item>
            <Menu.Item className='icon-wrapper' onClick={_handleLikeClick}>
              <Icon className='heart-icon' name='heart outline' />
              <p className='heart-text'>{likeCount}</p>
            </Menu.Item>
          </Menu>
        </Card.Content>
        <Card.Content extra>
          <Card.Meta textAlign='right'>
            <p className='event-card-footer'>
              Posted <TimeAgo date={timestamp} /> by {username}
            </p>
          </Card.Meta>
        </Card.Content>
      </Card>
    )
  }
}

EventCard.propTypes = {
  event: PropTypes.object.isRequired,
  eventImage: PropTypes.string.isRequired,
  handleTriggerClick: PropTypes.func.isRequired,
  _likeEvent: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  _user: state.user
})

const mapDispatchToProps = dispatch => ({
  _likeEvent: (eid, uid) => dispatch(likeEvent(eid, uid))
})

export default connect(mapStateToProps, mapDispatchToProps)(EventCard)
