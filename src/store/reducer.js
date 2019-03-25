import { combineReducers } from 'redux-immutable'
import { reducer as HeaderReducer } from '../common/store'
import { reducer as HomeReducer } from '../pages/home/store'
import { reducer as DetailReducer } from '../pages/detail/store'
import { reducer as LoginReducer } from '../pages/login/store'

export default combineReducers({
  header: HeaderReducer,
  home: HomeReducer,
  detail: DetailReducer,
  login: LoginReducer
})