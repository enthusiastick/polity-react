import React from 'react'
import { connect } from 'react-redux'

import RequestPasswordResetFormContainer from '../forms/RequestPasswordResetFormContainer'

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser.item
  }
}

const RequestPasswordReset = connect(
  mapStateToProps
)(RequestPasswordResetFormContainer)

export default RequestPasswordReset
