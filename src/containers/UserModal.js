import React, {Component} from 'react'
import {Header as Heading, Icon, Modal, Statistic} from 'semantic-ui-react'
import TimeAgo from 'react-timeago'

export default class UserModal extends Component {
  state = {modalOpen: false }

  _handleOpen = () => this.setState({modalOpen: true})

  _handleClose = () => this.setState({modalOpen: false})

  render() {
    const {username, email, likeCount, eventCount, joined} = this.props.user

    return (
      <Modal
        trigger={
          <a id='user-modal-trigger' onClick={this._handleOpen}>
            {username}
          </a>
        }
        open={this.state.modalOpen}
        onClose={this._handleClose}
        size='small'
      >
        <Heading content={username} subheader={email} textAlign='center' />
        <Modal.Content>
          <Modal.Description>
            <Statistic.Group size='mini' widths={2}>
              <Statistic>
                <Statistic.Value>{likeCount}</Statistic.Value>
                <Statistic.Label>
                  <Icon color='pink' name='heart' />Likes
                </Statistic.Label>
              </Statistic>
              <Statistic>
                <Statistic.Value>{eventCount}</Statistic.Value>
                <Statistic.Label>
                  <Icon color='teal' name='write' />Posted
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
