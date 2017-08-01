import React from 'react'
import { change, reduxForm } from 'redux-form'

import SignInForm from '../components/SignInForm'
import { createSession } from '../actions/createSession'
import { pushRoot } from '../actions/pushRoot'

let validate = fields => {
  const errors = {}

  return errors
}

let onSubmit = (values, dispatch) => {
  return dispatch(createSession(values))
  .then(() => { return dispatch(pushRoot()) })
}

const SignInFormContainer = props => {
  const switchHandler = value => {
    props.dispatch(change('signIn', 'rememberMe', value))
  }

  const ConnectedSignInForm = reduxForm({
    form: 'signIn',
    validate,
    onSubmit
  })(SignInForm)

  return(
    <ConnectedSignInForm switchHandler={switchHandler} />
  )
}

export default SignInFormContainer
