import { combineReducers } from 'redux-immutable'
import { reducer as HeaderReducer } from '../common/store'

export default combineReducers({
  header: HeaderReducer
})