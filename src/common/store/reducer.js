import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  onFocus: false
})

export default (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS) {
    return state.set('onFocus', true)
  }
  if (action.type === actionTypes.SEARCH_BLUR) {
    return state.set('onFocus', false)    
  }
  return state
}