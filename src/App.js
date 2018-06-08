import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import CalcBoard from './CalcBoard';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <CalcBoard />
        </div>
      </Provider>
    );
  }
}

export default App;
