import React, { Component } from 'react'
import { Field } from 'redux-form'

import Password from '../components/formFields/Password'
import TextInput from '../components/formFields/TextInput'

class EditUserForm extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className='row'>
        <div className='small-12 columns'>
          <h1 className='text-center top-padded'>{this.props.currentUser.handle}</h1>
          <form onSubmit={this.props.handleSubmit}>
            <div className='form-inputs'>
              <Field name='email' label='Email' component={TextInput} />
              <div className='row'>
                <div className='small-12 medium-6 columns'>
                  <Field name='firstName' label='First name' component={TextInput} />
                </div>
                <div className='small-12 medium-6 columns'>
                  <Field name='lastName' label='Last name' component={TextInput} />
                </div>
              </div>
              <Field name='password' label='Current password' component={Password} />
            </div>
            <div className='form-actions'>
              <button className='button' disabled={this.props.submitting} type='submit'>Update</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default EditUserForm
