import React from 'react'
import { connect } from 'react-redux'

import EditUserFormContainer from '../forms/EditUserFormContainer'

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser.item
  }
}

const EditUser = connect(
  mapStateToProps
)(EditUserFormContainer)

export default EditUser
