import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Form, Radio } from 'semantic-ui-react'

class ReportForm extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { handleSubmit } = this.props

    return (
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          Selected value: <b>{this.state.value}</b>
        </Form.Field>
        <Form.Field>
          <Radio
            label='Choose this'
            name='radioGroup'
            value='this'
            checked={this.state.value === 'this'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Or that'
            name='radioGroup'
            value='that'
            checked={this.state.value === 'that'}
            onChange={this.handleChange}
          />
        </Form.Field>
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
