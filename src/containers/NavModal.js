import React, { Component } from 'react'
import { userAuth } from '../Firebase'
import { Button, Modal } from 'semantic-ui-react'
import NavButton from '../components/NavButton'

export default class NavModal extends Component {
  constructor(props) {
    super(props)

    this.state = { modalOpen: false }

    this._handleOpen = this._handleOpen.bind(this)
    this._handleClose = this._handleClose.bind(this)
    this._handleLogOut = this._handleLogOut.bind(this)
  }

  _handleOpen = () => this.setState({ modalOpen: true })

  _handleClose = () => this.setState({ modalOpen: false })

  _handleLogOut = () => userAuth.signOut()

  render() {
    const { _handleOpen, _handleClose, _handleLogOut } = this
    const { modalOpen } = this.state

    return (
      <Modal
        trigger={<Button floated='right' icon='bars' onClick={_handleOpen}/>}
        open={modalOpen}
        basic
        size='small'
      >
        <Modal.Content onClick={_handleClose}>
          <NavButton attached='top' content='Home' to='/' />
          <NavButton content='Log In' to='/login' />
          <NavButton content='Sign Up' to='/signup' />
          <NavButton content='Log Out' handleLogOut={_handleLogOut} to='/' />
          <NavButton content='Submit' to='/submit' />
          <NavButton content='Help' to='/help' />
          <NavButton attached='bottom' content='About' to='/about' />
        </Modal.Content>
      </Modal>
    )
  }
}
