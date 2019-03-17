import React, { Component } from 'react';
import { GlobalStyle } from './style';
import { IconfontStyle } from './statics/iconfont/iconfont';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/home'
import store from './store'
import Header from './common/header'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <IconfontStyle />
          <GlobalStyle />
          <Header />
          <Router>
            <div>
              <Route path='/' exact component={Home}/>
              <Route path='/detail' exact render={() => <div>detail</div>}/>
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
