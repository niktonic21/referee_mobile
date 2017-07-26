/**
  This class is responsible fot correct app navigation.
*/

import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

import Login from '../components/pages/Login';
import Zapasy from '../components/pages/Zapasy';
import Profil from '../components/pages/Profil';
import NavigationDrawer from './NavigationDrawer';

class RouterS extends Component {
  render() {
    StatusBar.setBarStyle('light-content', true);
    return (
      <Router navigationBarStyle={{ backgroundColor: 'grey' }} >
        <Scene key="drawer" component={NavigationDrawer} open={false}>
          <Scene key="main" tabs >
            <Scene
              key="login"
              component={Login} title="Login"
            />
            <Scene
              key="zapasy" sceneStyle={{ paddingTop: 64 }}
              component={Zapasy} title="Zapasy" initial
            />
            <Scene
              key="profil"
              component={Profil}
              title="Profil"
              rightTitle="Upravit"
              onRight={() => console.log('Upravit')}
            />
          </Scene>
        </Scene>
      </Router>
    );
  }
}

export default RouterS;
