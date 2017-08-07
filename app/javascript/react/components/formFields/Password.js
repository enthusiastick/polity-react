import React from 'react'

const Password = props => {
  let { name, label } = props
  let labelElement

  if (props.showForgotLink) {
    labelElement = (
      <div className='row'>
        <div className='small-3 medium-1 columns'>
          <label htmlFor={name}>{props.label}</label>
        </div>
        <div className='small-9 medium-11 columns'>
          <label>
            <a href='password_resets/new'>Forgot your password?</a>
          </label>
        </div>
      </div>)
  } else {
    labelElement = <label htmlFor={name}>{label}</label>
  }

  return(
    <fieldset>
      {labelElement}
      <input id={name} type='password' {...props.input} />
    </fieldset>
  )
}

export default Password
