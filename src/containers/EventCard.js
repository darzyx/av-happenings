import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Card, Icon, Image, Menu} from 'semantic-ui-react'
import TimeAgo from 'react-timeago'

import EventDropdown from './EventDropdown'

const sampleImage = require('../media/example.jpg')

export default class EventCard extends Component {
  constructor(props) {
    super(props)

    this._handleLikeClick = this._handleLikeClick.bind(this)
    this._handleCommentClick = this._handleCommentClick.bind(this)
  }

  _handleLikeClick() {
    console.log('ATTEMPTED LIKE')
  }

  _handleCommentClick() {
    console.log('ATTEMPTED COMMENT')
  }

  render() {
    const {_handleCommentClick, _handleLikeClick} = this
    const {
      title,
      date,
      location,
      description,
      featured,
      commentCount,
      likeCount,
      time,
      timestamp,
      username,
      uid,
      id
    } = this.props.event

    return (
      <Card color='blue'>
        <Image
          label={
            featured ?
            {color: 'yellow', content: 'Featured!', ribbon: true} :
            null
          }
          src={sampleImage}
        />
        <Card.Content>
          <EventDropdown eventUID={uid} eventID={id} />
          <Card.Header>{title}</Card.Header>
          <Card.Meta>{date} @ {time}</Card.Meta>
          <Card.Meta>{location}</Card.Meta>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Menu icon='labeled' secondary size='mini' widths={2}>
            <Menu.Item id='comment-icon' onClick={_handleCommentClick}>
              <Icon name='comment outline' />
              {commentCount}
            </Menu.Item>
            <Menu.Item id='heart-icon' onClick={_handleLikeClick}>
              <Icon name='heart outline' />
              {likeCount}
            </Menu.Item>
          </Menu>
          <center>
            <p id='card-footer'>
              Posted <TimeAgo date={timestamp} /> by {username}
            </p>
          </center>
        </Card.Content>
      </Card>
    )
  }
}

EventCard.propTypes = {
  event: PropTypes.object.isRequired
}
