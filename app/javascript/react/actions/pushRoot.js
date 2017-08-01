import { push } from 'react-router-redux'

let pushRoot = () => {
  return(dispatch) => {
    return dispatch(push('/'))
  }
}

export { pushRoot }
