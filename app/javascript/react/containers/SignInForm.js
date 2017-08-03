import React, { Component } from 'react'
import { Field } from 'redux-form'
import { push } from 'react-router-redux'
import { flashNotice } from '../actions/flashNotice'

import Login from '../components/formFields/Login'
import Password from '../components/formFields/Password'
import RememberMe from '../components/formFields/RememberMe'

class SignInForm extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    if (this.props.currentUser.id) {
      this.props.dispatch(push('/'))
      this.props.dispatch(flashNotice({ alert: 'You are already signed in.' }))
    }
  }

  render() {
    return(
      <div className='row'>
        <div className='small-12 columns'>
          <h1 className='text-center top-padded'>Sign In</h1>
          <form onSubmit={this.props.handleSubmit}>
            <div className='form-inputs'>
              <Field name='login' component={Login} />
              <Field name='password' component={Password} />
              <Field name='rememberMe' component={RememberMe} switchHandler={this.props.switchHandler} />
            </div>
            <div className='form-actions'>
              <button className='button' type='submit' >Sign In</button>
              &nbsp;
              &nbsp;
              <a className='button' href='sign-up'>Sign Up</a>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default SignInForm
