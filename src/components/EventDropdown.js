import React, {Component} from 'react'
import {Dropdown} from 'semantic-ui-react'

import ReportEventModal from '../containers/ReportEventModal'
import DeleteEventModal from '../containers/DeleteEventModal'

export default class EventDropdown extends Component {
  render() {
    return (
      <Dropdown className='card-dropdown' direction='left' pointing='top'>
        <Dropdown.Menu>
          <Dropdown.Item icon='linkify' text='Copy link' />
          <ReportEventModal />
          <DeleteEventModal />
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}
