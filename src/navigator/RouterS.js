/**
  This class is responsible fot correct app navigation.
*/

import React, { Component } from 'react';
import { StatusBar, TouchableOpacity, Text } from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons';
import { Scene, Router, Drawer, Tabs } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Login from '../components/pages/Login';
import Zapasy from '../components/pages/Zapasy';
import Profil from '../components/pages/Profil';
//import MenuIcon from '../../assets/images/menu_burger.png';
//import NavigationDrawer from './NavigationDrawer';
//import DrawerContent from './DrawerContent';
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
        <Text> FILTER </Text>
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
         </Router>
    );
  }
}

const mapStateToProps = ({ ui }) => {
  const { filterSwitch } = ui;
  return { filterSwitch };
};

export default connect(mapStateToProps, { filter })(RouterS);
