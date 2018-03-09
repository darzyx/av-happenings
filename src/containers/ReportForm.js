import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Form } from 'semantic-ui-react'

class ReportForm extends Component {
  render() {
    const { handleSubmit } = this.props

    return (
      <Form onSubmit={handleSubmit}>
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
        {/* Submit button is remote */}
      </Form>
    )
  }
}

ReportForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

ReportForm = reduxForm({
  form: 'report',
  onSubmit: values => { console.log(values) }
})(ReportForm)

export default connect(null, null)(ReportForm)
