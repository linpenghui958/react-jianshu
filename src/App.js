import React, { Component } from 'react';
import { GlobalStyle } from './style';
import { IconfontStyle } from './statics/iconfont/iconfont';
import { Provider } from 'react-redux';
import store from './store'
import Header from './common/header'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <IconfontStyle />
        <GlobalStyle />
        <Header />
      </Provider>
    );
  }
}

export default App;
