import React from 'react'
import { reduxForm } from 'redux-form'

import RequestPasswordResetForm from '../containers/RequestPasswordResetForm'

let validate = values => {
  const errors = {}

  if (!values.email) {
    errors.email = 'can\'t be blank'
  }

  return errors
}

let onSubmit = (values, dispatch) => {
  console.log(values)
}

const RequestPasswordResetFormContainer = props => {
  const ConnectedRequestPasswordResetForm = reduxForm({
    form: 'requestPasswordReset',
    validate,
    onSubmit
  })(RequestPasswordResetForm)

  return(
    <ConnectedRequestPasswordResetForm currentUser={props.currentUser} />
  )
}

export default RequestPasswordResetFormContainer
