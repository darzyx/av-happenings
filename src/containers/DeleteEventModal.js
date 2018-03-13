import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Button, Dropdown, Modal} from 'semantic-ui-react'

import {deleteEvent} from '../actions/eventsActions'

class DeleteEventModal extends Component {
  constructor(props) {
    super(props)

    this.state = {modalOpen: false}

    this._handleModalOpen = this._handleModalOpen.bind(this)
    this._handleModalClose = this._handleModalClose.bind(this)
    this._handleDeleteClick = this._handleDeleteClick.bind(this)
  }

  _handleModalOpen = () => this.setState({modalOpen: true})

  _handleModalClose = () => this.setState({modalOpen: false})

  _handleDeleteClick() {
    const {_deleteEvent, eventID} = this.props

    _deleteEvent(eventID)

    this._handleModalClose()
  }

  render() {
    const {_handleModalOpen, _handleModalClose, _handleDeleteClick} = this
    const {modalOpen} = this.state

    return (
      <Modal
        open={modalOpen}
        onClose={_handleModalClose}
        size='small'
        trigger={
          <Dropdown.Item
            icon='delete'
            onClick={_handleModalOpen}
            text='Delete'
          />
        }
      >
        <Modal.Header>Delete Happening</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            Are you sure? This cannot be undone.
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={_handleModalClose}>Back</Button>
          <Button onClick={_handleDeleteClick}>Delete Forever</Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  _deleteEvent: id => dispatch(deleteEvent(id))
})

DeleteEventModal.propTypes = {
  _deleteEvent: PropTypes.func.isRequired,
  eventID: PropTypes.string.isRequired,
  eventUID: PropTypes.string.isRequired
}

export default connect(null, mapDispatchToProps)(DeleteEventModal)
