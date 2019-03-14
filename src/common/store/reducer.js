const defaultState = {
  onFocus: false
}

export default (state = defaultState, action) => {
  if (action.type === 'search_focus') {
    console.log('search_focus')
    return {
      onFocus: true
    }
  }
  if (action.type === 'search_blur') {
    console.log('search_blur')
    return {
      onFocus: false
    }
  }
  return state
}