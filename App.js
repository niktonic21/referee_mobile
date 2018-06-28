// app.js
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Expo from 'expo';
import { PersistGate } from 'redux-persist/integration/react';
import RouterS from './src/navigator/RouterS';
import configureStore from './src/redux/store';

export const { store, persistor } = configureStore();
class App extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf')
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    // temporary solution for ignoring yellow warning
    // "Warning: BackAndroid is deprecated. Please ...."
    console.ignoredYellowBox = ['Warning: BackAndroid'];

    // temporary solution for ignoring yellow warning
    // "Remote debugger is in a background tab which may cause apps to ...."
    console.ignoredYellowBox = ['Remote debugger'];

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterS />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
