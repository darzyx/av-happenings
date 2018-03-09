import React, { Component } from 'react'
import { Button, Dropdown, Modal } from 'semantic-ui-react'
import ReportForm from './ReportForm'

export default class CardDropdown extends Component {
  constructor(props) {
    super(props)

    this.state = { deleteModalOpen: false, reportModalOpen: false }

    this._handleDeleteModalOpen = this._handleDeleteModalOpen.bind(this)
    this._handleDeleteModalClose = this._handleDeleteModalClose.bind(this)
    this._handleReportModalOpen = this._handleReportModalOpen.bind(this)
    this._handleReportModalClose = this._handleReportModalClose.bind(this)
  }

  _handleDeleteModalOpen = () => this.setState({ deleteModalOpen: true })

  _handleDeleteModalClose = () => this.setState({ deleteModalOpen: false })

  _handleReportModalOpen = () => this.setState({ reportModalOpen: true })

  _handleReportModalClose = () => this.setState({ reportModalOpen: false })

  render() {
    return (
      <Dropdown className='card-dropdown' direction='left' pointing='top'>
        <Dropdown.Menu>
          <Dropdown.Item icon='linkify' text='Copy link' />
          <Modal
            open={this.state.reportModalOpen}
            onClose={this._handleReportModalClose}
            size='small'
            trigger={
              <Dropdown.Item
                icon='warning sign'
                onClick={this._handleReportModalOpen}
                text='Report'
              />
            }
          >
            <Modal.Header>
              Report Happening
            </Modal.Header>
            <Modal.Content>
              <ReportForm />
            </Modal.Content>
            <Modal.Actions>
              <Button onClick={this._handleReportModalClose}>
                Back
              </Button>
              <Button onClick={this._handleReportModalClose}>
                Submit Report
              </Button>
            </Modal.Actions>
          </Modal>
          <Modal
            open={this.state.deleteModalOpen}
            onClose={this._handleDeleteModalClose}
            size='small'
            trigger={
              <Dropdown.Item
                icon='delete'
                onClick={this._handleDeleteModalOpen}
                text='Delete'
              />
            }
          >
            <Modal.Header>
              Delete Happening
            </Modal.Header>
            <Modal.Content>
              <Modal.Description>
                Are you sure? This cannot be undone.
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button onClick={this._handleDeleteModalClose}>
                Back
              </Button>
              <Button onClick={this._handleDeleteModalClose}>
                Delete Forever
              </Button>
            </Modal.Actions>
          </Modal>
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}
