import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Dropdown} from 'semantic-ui-react'

import ReportEventModal from './ReportEventModal'
import DeleteEventModal from './DeleteEventModal'

class EventDropdown extends Component {
  render() {
    const {eventUID, _user} = this.props
    const userIsOwner = _user.uid === eventUID

    return (
      <Dropdown className='card-dropdown' direction='left' pointing='top'>
        <Dropdown.Menu>
          <Dropdown.Item icon='linkify' text='Copy link' />
          {
            _user.loggedIn &&
            (userIsOwner ? <DeleteEventModal /> : <ReportEventModal />)
          }
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}

const mapStateToProps = state => ({
  _user: state.user
})

EventDropdown.propTypes = {
  eventUID: PropTypes.string.isRequired,
  _user: PropTypes.object.isRequired
}

export default connect(mapStateToProps, null)(EventDropdown)
