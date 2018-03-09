import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

export default class CardDropdown extends Component {
  render() {
    return (
      <Dropdown className='card-dropdown' direction='left' pointing='top'>
        <Dropdown.Menu>
          <Dropdown.Item icon='linkify' text='Copy link' />
          <Dropdown.Item icon='warning sign' text='Report' />
          <Dropdown.Item icon='delete' text='Delete' />
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}
