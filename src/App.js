import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Counter from './component/Counter';

const initialState = {
  count: 0
}

function reducer(state = initialState, action){
  
  switch(action.type){
    case "INCREMENT":
      return {
        count: state.count + 1
      }
    case "DECREMENT":
      return {
        count: state.count - 1
      }
    default:
      return state;
  }
  return state;
}

const store = createStore(reducer);

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}

export default App;
