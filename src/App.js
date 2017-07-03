// app.js

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Router } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import RouterS from './navigator/RouterS';


// const RouterWithRedux = connect()(Router);
// import reducers from './reducers';
// // other imports...
//
// // create store...
// const store = compose(
//   applyMiddleware(ReduxThunk)
// )(createStore)(reducers);
//
//
// class App extends Component {
//   render () {
//     return (
//       <Provider store={store}>
//         <RouterWithRedux>
//           <RouterS/>
//         </RouterWithRedux>
//       </Provider>
//     );
//   }
// }
class App extends Component {
  render () {

    // temporary solution for ignoring yellow warning
    // "Warning: BackAndroid is deprecated. Please ...."
    console.ignoredYellowBox = ['Warning: BackAndroid'];

    // temporary solution for ignoring yellow warning
    // "Remote debugger is in a background tab which may cause apps to ...."
    console.ignoredYellowBox = ['Remote debugger'];


    return (
        <View>
          <RouterS/>
        </View>
    );
  }
}

export default App;
