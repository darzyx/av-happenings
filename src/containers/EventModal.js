import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TimeAgo from 'react-timeago'
import { Divider, Header as Heading, Image, Modal } from 'semantic-ui-react'

import { getComments } from '../actions/commentGetActions'
import CommentFormSection from '../components/CommentFormSection'
import CommentsSection from '../components/CommentsSection'
import EventCard from './EventCard'

const sampleImage = require('../media/example.jpg')

class EventModal extends Component {
  constructor(props) {
    super(props)

    this.state = {modalOpen: false}

    this._handleOpen = this._handleOpen.bind(this)
    this._handleClose = this._handleClose.bind(this)
    this._handleTriggerClick = this._handleTriggerClick.bind(this)
  }

  _handleTriggerClick() {
    const { _getComments } = this.props
    const { id } = this.props.event
    const { _handleOpen } = this

    _handleOpen()
    _getComments(id)
  }

  _handleOpen = () => this.setState({modalOpen: true})

  _handleClose = () => this.setState({modalOpen: false})

  render() {
    const { _handleClose, _handleTriggerClick } = this
    const { modalOpen } = this.state
    const { _comments, _user } = this.props
    const { event } = this.props
    const {
      title,
      date,
      location,
      description,
      time,
      timestamp,
      username,
      id
    } = this.props.event

    return (
      <Modal
        closeIcon
        onClose={_handleClose}
        open={modalOpen}
        size='small'
        trigger={
          <EventCard
            event={event}
            eventImage={sampleImage}
            handleTriggerClick={_handleTriggerClick}
          />
        }
      >
        <Image src={sampleImage} />
        <Modal.Header>
          <center>
            <Heading as='h1'>
              {title}
              <Heading.Subheader>
                {date + ' @ ' + time} <br /> {location}
              </Heading.Subheader>
            </Heading>
          </center>
        </Modal.Header>
        <Modal.Content>
          <Modal.Description className='event-description'>
            {description}
          </Modal.Description>
          <Divider hidden />
          <center>
            <p className='post-info-footer'>
              Posted <TimeAgo date={timestamp} /> by {username}
            </p>
          </center>
          <Divider hidden />
          <CommentFormSection loggedIn={_user.loggedIn} eid={id} />
          <CommentsSection comments={_comments} user={_user} eid={id} />
        </Modal.Content>
      </Modal>
    )
  }
}

const mapStateToProps = state => ({
  _comments: state.comments,
  _user: state.user,
  _loggedIn: state.user.loggedIn
})

const mapDispatchToProps = dispatch => ({
  _getComments: eid => dispatch(getComments(eid))
})

EventModal.propTypes = {
  _comments: PropTypes.object.isRequired,
  _user: PropTypes.object.isRequired,
  event: PropTypes.object.isRequired,
  _getComments: PropTypes.func.isRequired,
  _loggedIn: PropTypes.bool.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(EventModal)
