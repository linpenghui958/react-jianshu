import React, { Component, Fragment } from 'react';
import { GlobalStyle } from './style';
import { IconfontStyle } from './statics/iconfont/iconfont';
import Header from './common/header'

class App extends Component {
  render() {
    return (
      <Fragment>
        <IconfontStyle />
        <GlobalStyle />
        <Header />
      </Fragment>
    );
  }
}

export default App;
