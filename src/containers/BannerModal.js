import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Modal } from 'semantic-ui-react'

export default class BannerModal extends Component {
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
          <Button as={Link} attached='top' to='/'>Home</Button>
          <Button as={Link} attached to='/login'>Log In</Button>
          <Button as={Link} attached to='/signup'>Sign Up</Button>
          <Button as={Link} attached to='/'>Log Out</Button>
          <Button as={Link} attached to='/submit'>Submit</Button>
          <Button as={Link} attached to='/help'>Help</Button>
          <Button as={Link} attached='bottom' to='/about'>About</Button>
        </Modal.Content>
      </Modal>
    )
  }
}
