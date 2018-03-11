import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Form } from 'semantic-ui-react'

class ReportForm extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { handleSubmit } = this.props

    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Field>
            <label>
              <Field
                name='reason'
                component='input'
                type='radio'
                value='uninteresting'
              />{' '}
              Uninteresting
            </label>
          </Form.Field>
          <Form.Field>
            <label>
              <Field
                name='reason'
                component='input'
                type='radio'
                value='spam'
              />{' '}
              Spam
            </label>
          </Form.Field>
          <Form.Field>
            <label>
              <Field
                name='reason'
                component='input'
                type='radio'
                value='harassment'
              />{' '}
              Harassment
            </label>
          </Form.Field>
          <Form.Field>
            <label>
              <Field
                name='reason'
                component='input'
                type='radio'
                value='illegal'
              />{' '}
              Illegal
            </label>
          </Form.Field>
        </Form.Group>
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
