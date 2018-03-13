import React from 'react'
import PropTypes from 'prop-types'
import {Field} from 'redux-form'

// Custom Radio (Semantic UI's doesn't stylistically play nice with Redux Form)

const ReduxFormRadio = ({label, name, value}) => (
  <div className='radio-container'>
    <Field
      className='radio'
      component='input'
      id={name}
      name={name}
      type='radio'
      value={value}
    />
    <label className='radio-label'>{label}</label>
  </div>
)

ReduxFormRadio.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

export default ReduxFormRadio
