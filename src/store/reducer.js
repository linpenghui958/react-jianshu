import { combineReducers } from 'redux-immutable'
import { reducer as HeaderReducer } from '../common/store'
import { reducer as HomeReducer } from '../pages/home/store'

export default combineReducers({
  header: HeaderReducer,
  home: HomeReducer
})