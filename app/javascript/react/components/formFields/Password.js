import React from 'react'

const Password = props => {
  return(
    <fieldset>
      <div className='row'>
        <div className='small-3 medium-1 columns'>
          <label htmlFor='password'>Password</label>
        </div>
        <div className='small-9 medium-11 columns'>
          <label>
            <a href='password_resets/new'>Forgot your password?</a>
          </label>
        </div>
      </div>
      <input id='password' type='password' {...props.input} />
    </fieldset>
  )
}

export default Password
