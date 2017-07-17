// app.js
import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import firebase from 'firebase';
import RouterS from './navigator/RouterS';
import configureStore from './configureStore';

const store = configureStore({});

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDYFLQYIcPzj1j-J6hO87hPAOoyKb5TTH4',
      authDomain: 'referee-60959.firebaseapp.com',
      databaseURL: 'https://referee-60959.firebaseio.com',
      projectId: 'referee-60959',
      storageBucket: 'referee-60959.appspot.com',
      messagingSenderId: '881564158476'
    };

    firebase.initializeApp(config);
  }

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
