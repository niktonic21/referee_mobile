/**
  This class is responsible fot correct app navigation.
*/

import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import Login from '../components/pages/Login';
import Zapasy from '../components/pages/Zapasy';
import NavigationDrawer from './NavigationDrawer';


class RouterS extends Component {
  render() {
    StatusBar.setBarStyle('light-content', true);
    return (
      <Router >
        <Scene key="drawer" component={NavigationDrawer} open={false}>
          <Scene key="main" tabs >
            <Scene
              key="login" sceneStyle={{ paddingTop: 64 }}
              component={Login} title="Login"
            />
            <Scene
              key="zapasy" sceneStyle={{ paddingTop: 64 }}
              component={Zapasy} title="Zapasy" initial
            />
          </Scene>
        </Scene>
      </Router>
    );
  }
}

export default RouterS;
