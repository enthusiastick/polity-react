import React from 'react'
import { reduxForm, reset } from 'redux-form'
import { push } from 'react-router-redux'

import RequestPasswordResetForm from '../containers/RequestPasswordResetForm'

import { clearNotices, flashNotice } from '../actions/flashNotice'
import { createPasswordReset } from '../actions/createPasswordReset'

let validate = values => {
  const errors = {}

  if (!values.email) {
    errors.email = 'can\'t be blank'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'not valid'
  }

  return errors
}

let onSubmit = (values, dispatch) => {
  return dispatch(createPasswordReset(values))
  .then(data => {
    dispatch(clearNotices())
    dispatch(flashNotice({ success: 'An email has been sent with instructions on how to reset your password.' }))
    dispatch(push('/'))
  })
  .catch(error => {
    dispatch(reset('requestPasswordReset'))
    dispatch(clearNotices())
    dispatch(flashNotice({ alert: 'There was a problem resetting your password. Please try again.' }))
  })
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
