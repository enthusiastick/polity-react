import React from 'react'

const Login = props => {
  return(
    <fieldset>
      <label htmlFor='login'>Email or username</label>
      <input id='login' type='text' {...props.input} />
    </fieldset>
  )
}

export default Login
