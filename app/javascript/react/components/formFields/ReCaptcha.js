import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

const ReCaptcha = props => {
  let recaptchaPublicKey = document.getElementById('react-app').dataset.recaptcha

  return(
    <fieldset className='google-recaptcha'>
      <ReCAPTCHA
        sitekey={recaptchaPublicKey}
        onChange={props.input.onChange}
      />
    </fieldset>
  )
}

export default ReCaptcha
