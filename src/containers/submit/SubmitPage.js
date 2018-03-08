import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postEventActions } from '../../actions/eventsActions'
import { Divider } from 'semantic-ui-react'
import SubmitForm from './SubmitForm'

class SubmitPage extends Component {
  render() {
    const { _postEvent } = this.props

    return (
      <div>
        <Divider hidden />
        <SubmitForm onSubmit={_postEvent} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return { _postEvent: event => { dispatch(postEventActions(event)) }}
}

export default connect(null, mapDispatchToProps)(SubmitPage)
