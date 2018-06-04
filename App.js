// app.js
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import RouterS from './src/navigator/RouterS';
import configureStore from './src/redux/store';

export const store = configureStore();
class App extends Component {
  render() {
    // temporary solution for ignoring yellow warning
    // "Warning: BackAndroid is deprecated. Please ...."
    console.ignoredYellowBox = ['Warning: BackAndroid'];

    // temporary solution for ignoring yellow warning
    // "Remote debugger is in a background tab which may cause apps to ...."
    console.ignoredYellowBox = ['Remote debugger'];

    return (
      <Provider store={store}>
        <RouterS />
      </Provider>
    );
  }
}

export default App;
