/**
  This class is responsible fot correct app navigation.
*/

import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import {
  Actions,
  ActionConst,
  Scene,
  Router
} from 'react-native-router-flux';
import { connect } from 'react-redux';
import Login from '../components/pages/Login';
import Zapasy from '../components/pages/Zapasy';
import NavigationDrawer from './NavigationDrawer';


class RouterS extends Component {
  render() {
    StatusBar.setBarStyle('light-content', true);
    return (
      <Router>
        <Scene key="drawer" component={NavigationDrawer} open={false}>
          <Scene key="main" tabs >
            <Scene key="login" component={Login} title="Login" initial />
            <Scene key="zapasy" component={Zapasy} title="Zapasy"/>
          </Scene>
        </Scene>
      </Router>
    );
  }
}

export default RouterS;
