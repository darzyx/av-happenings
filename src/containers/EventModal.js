import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import TimeAgo from 'react-timeago'
import {
  Divider,
  Header as Heading,
  Image,
  Loader,
  Message,
  Modal
} from 'semantic-ui-react'

import { getComments } from '../actions/commentGetActions'
import CommentForm from './CommentForm'

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
    const { _comments, _loggedIn } = this.props
    const noComments = _comments.items.length === 0
    const {
      title,
      date,
      location,
      description,
      featured,
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
        trigger={
          <Image
            className='event-image'
            label={
              featured ?
              {color: 'yellow', content: 'Featured!', ribbon: true} :
              null
            }
            onClick={_handleTriggerClick}
            src={sampleImage}
          />
        }
        size='small'
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
          <Modal.Description>{description}</Modal.Description>
          {
            _loggedIn ?
            <React.Fragment>
              <Divider hidden />
              <CommentForm eid={id} />
            </React.Fragment> :
            <Message>
              <Link to='/login'>Log In </Link>
              or
              <Link to='/signup'> Sign Up </Link>
              in order to join the discussion!
            </Message>
          }
          <Divider hidden />
          {
            _comments.isGetting ?
            <Loader active content='Loading...' inline='centered' /> :
            noComments ?
            <center>
              <Message content='No comments here yet!' header='Empty' />
            </center> :
            _comments.items.map((comment, key) =>
              <Message
                header={comment.username}
                content={comment.description}
                key={key}
              />
            )
          }
          <Divider hidden />
          <center>
            <p className='post-info-footer'>
              Posted <TimeAgo date={timestamp} /> by {username}
            </p>
          </center>
        </Modal.Content>
      </Modal>
    )
  }
}

const mapStateToProps = state => ({
  _comments: state.comments,
  _loggedIn: state.user.loggedIn
})

const mapDispatchToProps = dispatch => ({
  _getComments: eid => dispatch(getComments(eid))
})

EventModal.propTypes = {
  _comments: PropTypes.object.isRequired,
  event: PropTypes.object.isRequired,
  _getComments: PropTypes.func.isRequired,
  _loggedIn: PropTypes.bool.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(EventModal)
