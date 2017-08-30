import React from 'react'
import { reduxForm, SubmissionError } from 'redux-form'
import { push } from 'react-router-redux'

import EditUserForm from '../containers/EditUserForm'

import { clearNotices, flashNotice } from '../actions/flashNotice'
import { updateUser } from '../actions/updateUser'

let validate = values => {
  const errors = {}

  if (!values.email) {
    errors.email = 'can\'t be blank'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'not valid'
  }
  if (!values.firstName) {
    errors.firstName = 'can\'t be blank'
  }
  if (!values.lastName) {
    errors.lastName = 'can\'t be blank'
  }
  if (!values.password) {
    errors.password = 'can\'t be blank'
  }

  return errors
}

let onSubmit = (values, dispatch) => {
  return dispatch(updateUser(values))
  .then(data => {
    dispatch(clearNotices())
    dispatch(flashNotice({ success: 'Update successful.' }))
    dispatch(push('/'))
  })
  .catch(errors => {
    dispatch(clearNotices())
    dispatch(flashNotice({ alert: 'There was a problem with your update.' }))
    let submissionErrors = {}
    for (let prop of Object.keys(errors)) {
      submissionErrors[prop] = errors[prop]
    }
    throw new SubmissionError(submissionErrors)
  })
}

const EditUserFormContainer = props => {
  let initialValues = {
    email: props.currentUser.email,
    handle: props.currentUser.handle,
    firstName: props.currentUser.firstName,
    lastName: props.currentUser.lastName
  }

  const ConnectedEditUserForm = reduxForm({
    form: 'editUser',
    validate,
    onSubmit,
    initialValues
  })(EditUserForm)

  return(
    <ConnectedEditUserForm currentUser={props.currentUser} />
  )
}

export default EditUserFormContainer
