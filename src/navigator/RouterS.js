/**
  This class is responsible fot correct app navigation.
*/

import React, { Component } from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Scene, Router } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Login from '../components/pages/Login';
import Zapasy from '../components/pages/Zapasy';
import Profil from '../components/pages/Profil';
import NavigationDrawer from './NavigationDrawer';
import SetRouter from './SetRouter';
import { filter } from '../actions';

class RouterS extends Component {

  renderRightButton() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.filter(!this.props.filterSwitch);
        }}
      >
        <Icon name='ios-funnel' size={24} color='black' />
      </TouchableOpacity>
    );
  }

  render() {
    StatusBar.setBarStyle('dark-content', true);
    return (
      <Router
        titleStyle={{ color: 'black' }}
        leftButtonIconStyle={{ tintColor: 'black' }}
        navigationBarStyle={{ backgroundColor: '#D65153', borderBottomWidth: 0 }}
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
              key="zapasy"
              sceneStyle={{ paddingTop: 64, backgroundColor: 'rgb(236,236,236)' }}
              component={Zapasy} title="Zapasy" initial
              renderRightButton={() => this.renderRightButton()}
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

const mapStateToProps = ({ ui }) => {
  const { filterSwitch } = ui;
  return { filterSwitch };
};

export default connect(mapStateToProps, { filter })(RouterS);
