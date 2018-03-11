import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Form } from 'semantic-ui-react'
import ReduxFormRadio from '../components/ReduxFormRadio'

class ReportForm extends Component {
  render() {
    const { handleSubmit } = this.props

    return (
      <Form onSubmit={handleSubmit}>
        <ReduxFormRadio
          label='I find this happening uninteresting.'
          name='reason'
          value='uninteresting'
        />
        <ReduxFormRadio
          label='This is spam.'
          name='reason'
          value='spam'
        />
        <ReduxFormRadio
          label='This harasses me or someone else.'
          name='reason'
          value='harassment'
        />
        <ReduxFormRadio
          label='This contains illegal content.'
          name='reason'
          value='illegal'
        />
        <Form.Group>
          <Form.Field
            component='input'
            control={Field}
            label='Details'
            name='details'
            placeholder='Please provide details.'
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
