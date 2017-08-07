import React from 'react'

const TextInput = props => {
  let { name, label } = props

  return(
    <fieldset>
      <label htmlFor={name}>{label}</label>
      <input id={name} type='text' {...props.input} />
    </fieldset>
  )
}

export default TextInput
