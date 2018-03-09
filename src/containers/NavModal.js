import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import NavButton from '../components/NavButton'

export default class NavModal extends Component {
  state = { modalOpen: false }

  _handleOpen = () => this.setState({ modalOpen: true })

  _handleClose = () => this.setState({ modalOpen: false })

  render() {
    return (
      <Modal
        trigger={
          <Button floated='right' icon='bars' onClick={this._handleOpen}/>
        }
        open={this.state.modalOpen}
        onClose={this._handleClose}
        basic
        size='small'
      >
        <Modal.Content onClick={this._handleClose}>
          <NavButton attached='top' content='Home' to='/' />
          <NavButton content='Log In' to='/login' />
          <NavButton content='Sign Up' to='/signup' />
          <NavButton content='Log Out' to='/' />
          <NavButton content='Submit' to='/submit' />
          <NavButton content='Help' to='/help' />
          <NavButton attached='bottom' content='About' to='/about' />
        </Modal.Content>
      </Modal>
    )
  }
}
