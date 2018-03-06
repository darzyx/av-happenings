import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postEventActions } from '../../actions/postEventActions'
import SubmitForm from './SubmitForm'

class SubmitPage extends Component {
  render() {
    const { _postEvent } = this.props

    return (
      <div>
        <SubmitForm onSubmit={_postEvent} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return { _postEvent: event => { dispatch(postEventActions(event)) }}
}

export default connect(null, mapDispatchToProps)(SubmitPage)
