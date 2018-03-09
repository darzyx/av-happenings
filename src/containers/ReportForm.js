import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Divider, Form } from 'semantic-ui-react'

class ReportForm extends Component {
  _handleSubmitClick(values) {
    console.log(values)
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props
    const disable = pristine || submitting

    return (
      <Form onSubmit={handleSubmit(this._handleSubmitClick)}>
        <Form.Group>
          <Form.Field
            component='input'
            control={Field}
            label='Details'
            name='details'
            placeholder='Details about the problem'
            type='text'
            width={16}
          />
        </Form.Group>
        <Divider hidden />
        <Form.Group>
          <Form.Button disabled={disable} type='submit'>
            Report
          </Form.Button>
        </Form.Group>
      </Form>
    )
  }
}

ReportForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired
}

ReportForm = reduxForm({ form: 'report' })(ReportForm)

export default connect(null, null)(ReportForm)
