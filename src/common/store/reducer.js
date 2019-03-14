import * as actionTypes from './actionTypes'

const defaultState = {
  onFocus: false
}

export default (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS) {
    return {
      onFocus: true
    }
  }
  if (action.type === actionTypes.SEARCH_BLUR) {
    return {
      onFocus: false
    }
  }
  return state
}