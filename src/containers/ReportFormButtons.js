import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { submit } from 'redux-form'
import { Button } from 'semantic-ui-react'

class ReportFormButtons extends Component {
  constructor(props) {
    super(props)

    this._handleReportClick = this._handleReportClick.bind(this)
  }

  _handleReportClick() {
    const { _handleModalClose, _submitReport } = this.props

    _submitReport()

    _handleModalClose()
  }

  render() {
    const { _handleModalClose } = this.props

    return (
      <div>
        <Button onClick={_handleModalClose}>Back</Button>
        <Button onClick={this._handleReportClick}>Submit Report</Button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  _submitReport: () => dispatch(submit('report'))
})

ReportFormButtons.propTypes = {
  _handleModalClose: PropTypes.func.isRequired,
  _submitReport: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(ReportFormButtons);