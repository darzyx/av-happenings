import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import TimeAgo from 'react-timeago'
import {
  Divider,
  Header as Heading,
  Image,
  Message,
  Modal
} from 'semantic-ui-react'

import CommentForm from './CommentForm'

const sampleImage = require('../media/example.jpg')

class EventModal extends Component {
  constructor(props) {
    super(props)

    this.state = {modalOpen: false}

    this._handleOpen = this._handleOpen.bind(this)
    this._handleClose = this._handleClose.bind(this)
  }

  _handleOpen = () => this.setState({modalOpen: true})

  _handleClose = () => this.setState({modalOpen: false})

  render() {
    const {_handleOpen, _handleClose} = this
    const {modalOpen} = this.state
    const {_loggedIn} = this.props
    const {
      title,
      date,
      location,
      description,
      featured,
      time,
      timestamp,
      username,
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
            onClick={_handleOpen}
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
                {date + ' @ ' + time}
                <br />
                {location}
              </Heading.Subheader>
            </Heading>
          </center>
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            {description}
          </Modal.Description>
          {
            _loggedIn ?
            <React.Fragment>
              <Divider hidden />
              <CommentForm />
            </React.Fragment> :
            <Message>
              <Link to='/login'>Log In </Link>
              or
              <Link to='/signup'> Sign Up </Link>
              in order to join the discussion!
            </Message>
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

EventModal.propTypes = {
  event: PropTypes.object.isRequired,
  _loggedIn: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  _loggedIn: state.user.loggedIn
})

export default connect(mapStateToProps, null)(EventModal)
