import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class HomeMenu extends Component {
  constructor(props) {
    super(props)

    this.state = { activeItem: 'top' }

    this._handleItemClick = this._handleItemClick.bind(this)
  }

  _handleItemClick(e, { name }) { this.setState({ activeItem: name }) }

  render() {
    const { activeItem } = this.state

    return (
      <Menu attached='bottom' id='menu-bar' pointing size='tiny' widths='5'>
        <Menu.Item
          name='top'
          active={activeItem === 'top'}
          onClick={this._handleItemClick}
        />
        <Menu.Item
          name='featured'
          active={activeItem === 'featured'}
          onClick={this._handleItemClick}
        />
        <Menu.Item
          name='new'
          active={activeItem === 'new'}
          onClick={this._handleItemClick}
        />
        <Menu.Item
          name='mine'
          active={activeItem === 'mine'}
          onClick={this._handleItemClick}
        />
        <Menu.Item
          name='search'
          active={activeItem === 'search'}
          onClick={this._handleItemClick}
        />
      </Menu>
    )
  }
}
