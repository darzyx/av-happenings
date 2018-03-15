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
    const { _handleModalOpen, _handleModalClose } = this
    const { modalOpen } = this.state

    return (
      <Modal
        open={modalOpen}
        onClose={_handleModalClose}
        size='small'
        trigger={
          <Dropdown.Item
            icon='warning sign'
            onClick={_handleModalOpen}
            text='Report'
          />
        }
      >
        <Modal.Header>Report Happening</Modal.Header>
        <Modal.Content><ReportForm /></Modal.Content>
        <ReportFormButtons _handleModalClose={_handleModalClose} />
      </Modal>
    )
  }
}
