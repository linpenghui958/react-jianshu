import axios from 'axios'
import * as constants from './constants'
import { fromJS } from 'immutable';

const changHomeData = (result) => ({
	type: constants.CHANGE_HOME_DATA,
	topicList: result.topicList,
	articleList: result.articleList,
	recommendList: result.recommendList
});

const addHomeList = list => ({
  type: constants.ADD_HOME_LIST,
  list: fromJS(list)
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then(res => {
      const result = res.data.data
      console.log(result)
      dispatch(changHomeData(result))
		})
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json').then(res => {
      const result = res.data.data
      dispatch(addHomeList(result, page+1))
    })
  }
}

export const toggleTopShow = (show) => ({
  type: constants.TOGGLE_SCROLL_TOP,
  show
})