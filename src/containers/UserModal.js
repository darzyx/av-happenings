import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Header as Heading, Icon, Modal, Statistic } from 'semantic-ui-react'
import TimeAgo from 'react-timeago'

import { getUserData } from '../actions/userActions'

class UserModal extends Component {
  constructor(props) {
    super(props)

    this.state = { modalOpen: false }

    this._handleOpen = this._handleOpen.bind(this)
    this._handleClose = this._handleClose.bind(this)
    this._handleTriggerClick = this._handleTriggerClick.bind(this)
  }

  _handleOpen = () => this.setState({ modalOpen: true })

  _handleClose = () => this.setState({ modalOpen: false })

  _handleTriggerClick() {
    this.props._getUserData()
    this._handleOpen()
  }

  render() {
    const { username, email, likeCount, eventCount, joined } = this.props.user
    const { _handleClose, _handleTriggerClick } = this
    const { modalOpen } = this.state

    return (
      <Modal
        trigger={
          <a id='user-modal-trigger' onClick={_handleTriggerClick}>
            {username}
          </a>
        }
        open={modalOpen}
        onClose={_handleClose}
        size='small'
      >
        <Heading content={username} subheader={email} textAlign='center' />
        <Modal.Content>
          <Modal.Description>
            <Statistic.Group size='mini' widths={2}>
              <Statistic>
                <Statistic.Value>{likeCount}</Statistic.Value>
                <Statistic.Label>
                  <Icon color='pink' name='heart' /> Likes
                </Statistic.Label>
              </Statistic>
              <Statistic>
                <Statistic.Value>{eventCount}</Statistic.Value>
                <Statistic.Label>
                  <Icon color='teal' name='write' /> Posted
                </Statistic.Label>
              </Statistic>
            </Statistic.Group>
            <Heading textAlign='center'>
              <Heading.Subheader>
                Joined <TimeAgo date={joined} />
              </Heading.Subheader>
            </Heading>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}

UserModal.propTypes = {
  _getUserData: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  _getUserData: () => dispatch(getUserData())
})

export default connect(null, mapDispatchToProps)(UserModal)
