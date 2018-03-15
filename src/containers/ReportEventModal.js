import React, { Component } from 'react'
import { Dropdown, Modal } from 'semantic-ui-react'

import ReportForm from './ReportForm'
import ReportFormButtons from './ReportFormButtons'

export default class ReportEventModal extends Component {
  constructor(props) {
    super(props)

    this.state = { modalOpen: false }

    this._handleModalOpen = this._handleModalOpen.bind(this)
    this._handleModalClose = this._handleModalClose.bind(this)
  }

  _handleModalOpen = () => this.setState({ modalOpen: true })

  _handleModalClose = () => this.setState({ modalOpen: false })

  render() {
    return (
      <Modal
        open={this.state.modalOpen}
        onClose={this._handleModalClose}
        size='small'
        trigger={
          <Dropdown.Item
            icon='warning sign'
            onClick={this._handleModalOpen}
            text='Report'
          />
        }
      >
        <Modal.Header>Report Happening</Modal.Header>
        <Modal.Content><ReportForm /></Modal.Content>
        <ReportFormButtons _handleModalClose={this._handleModalClose} />
      </Modal>
    )
  }
}
