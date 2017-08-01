import React from 'react'
import { Field } from 'redux-form'

import Login from './formFields/Login'
import Password from './formFields/Password'
import RememberMe from './formFields/RememberMe'

const SignInForm = props => {
  return(
    <div className='row'>
      <div className='small-12 columns'>
        <h1 className='text-center top-padded'>Sign In</h1>
        <form onSubmit={props.handleSubmit}>
          <div className='form-inputs'>
            <Field name='login' component={Login} />
            <Field name='password' component={Password} />
            <Field name='rememberMe' component={RememberMe} switchHandler={props.switchHandler} />
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

export default SignInForm
