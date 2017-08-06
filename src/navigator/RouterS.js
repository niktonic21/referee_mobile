/**
  This class is responsible fot correct app navigation.
*/

import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Scene, Router } from 'react-native-router-flux';
import Login from '../components/pages/Login';
import Zapasy from '../components/pages/Zapasy';
import Profil from '../components/pages/Profil';
import NavigationDrawer from './NavigationDrawer';
import SetRouter from './SetRouter';

class RouterS extends Component {
  render() {
    StatusBar.setBarStyle('dark-content', true);
    return (
      <Router
        titleStyle={{ color: 'black' }}
        rightButtonTextStyle={{ color: 'black' }}
        leftButtonIconStyle={{ tintColor: 'black' }}
        navigationBarStyle={{ backgroundColor: 'white', }}
      >
        <Scene
          key="drawer"
          component={NavigationDrawer} open={false}
        >
          <Scene key="main" tabs >
            <Scene
              key="login"
              component={Login} title="Login"
            />
            <Scene
              key="zapasy" sceneStyle={{ paddingTop: 64,
                backgroundColor: 'rgb(236,236,236)' }}
              component={Zapasy} title="Zapasy" initial
            />
            <Scene
              key="profil"
              component={Profil}
              sceneStyle={{ backgroundColor: 'rgb(236,236,236)' }}
              title="Profil"
              rightTitle="Upravit"
              onRight={() => {
                const set = new SetRouter();
                set.profileEdit();
              }}
            />
          </Scene>
        </Scene>
      </Router>
    );
  }
}

export default RouterS;
