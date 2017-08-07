import React from 'react'
import { connect } from 'react-redux'

import SignUpFormContainer from '../forms/SignUpFormContainer'

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser.item
  }
}

const SignUp = connect(
  mapStateToProps
)(SignUpFormContainer)

export default SignUp
