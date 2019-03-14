import { combineReducers } from 'redux'
import { reducer as HeaderReducer } from '../common/store'

export default combineReducers({
  header: HeaderReducer
})