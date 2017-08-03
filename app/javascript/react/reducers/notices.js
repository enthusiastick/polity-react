import { FLASH_NOTICE } from '../actions/flashNotice'

let initialState = {
  item: {}
}

const notices = (state = initialState, action) => {
  switch (action.type) {
    case FLASH_NOTICE:
      let newItem = Object.assign({}, state.item, action.notice)
      return Object.assign({}, state, { item: newItem })
    default:
      return state
  }
}

export default notices
