/**
  This class is responsible fot correct app navigation.
*/

import React, { Component } from 'react';
import { StatusBar, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import firebase from 'firebase';
import { connect } from 'react-redux';
import Login from '../components/pages/Login';
import Settings from '../components/pages/Settings';
import Zapasy from '../components/pages/Zapasy';
import Profil from '../components/pages/Profil';
import MojeZapasyList from '../components/ui/MojeZapasyList';
import MatchDetail from '../components/pages/MatchDetail';
import TabIcon from './TabIcon';
import SetRouter from './SetRouter';
import {
  filter,
  getAllDelegation,
  filterChanged,
  loggedInChange,
  profileFetchData,
  loadLastTimestamp
} from '../redux/actions';
import { numberToMonth2 } from '../utils/Utils';

class RouterS extends Component {
  componentWillMount() {
    //this.props.loadLastTimestamp();
    const month = new Date().getMonth() + 1;
    this.props.filterChanged('mesiac', numberToMonth2(month));
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.filterChanged('rozhodca', user.uid);
        this.props.loggedInChange(user, (this.props.loggedIn = true));
        this.props.profileFetchData();
      } else {
        this.props.filterChanged('rozhodca', 'Rozhodca');
        this.props.loggedInChange(user, (this.props.loggedIn = false));
      }
    });
  }

  renderRightButton() {
    return (
      <TouchableOpacity
        onPress={() => {
          //this.props.filter(!this.props.filterSwitch);
        }}
      >
        <Text style={{ color: 'black', marginRight: 10 }}> FILTER </Text>
      </TouchableOpacity>
    );
  }

  render() {
    StatusBar.setBarStyle('dark-content', true);
    return (
      <Router
        titleStyle={{ color: 'black' }}
        leftButtonIconStyle={{ tintColor: 'black' }} //#c53211 red //#2A2F3A, #2e3830 grey
        navigationBarStyle={{ backgroundColor: '#c53211', borderBottomWidth: 0 }}
      >
        <Scene key="root" hideNavBar>
          <Scene
            key="_main"
            tabs
            tabBarStyle={styles.tabBarStyle}
            labelStyle={styles.labelStyle}
            tabBarPosition={'bottom'}
            inactiveTintColor={'black'}
            activeTintColor={'white'}
            indicatorStyle={{ backgroundColor: 'red' }}
          >
            <Scene
              key="zapasy"
              icon={TabIcon}
              sceneStyle={{ backgroundColor: 'rgb(236,236,236)' }}
              component={Zapasy}
              title="Zapasy"
              initial
              renderRightButton={() => this.renderRightButton()}
            />
            <Scene key="vyctovanie" icon={TabIcon} component={MojeZapasyList} title="Vyctovanie" />
            <Scene key="statistiky" icon={TabIcon} component={Login} title="Statistiky" />
            <Scene key="nastavenia" icon={TabIcon} component={Settings} title="Nastavenia" />
          </Scene>

          <Scene
            key="detail"
            hideNavBar={false}
            sceneStyle={{ backgroundColor: 'rgb(236,236,236)' }}
            title="Detail Zápasu"
            back
            backButtonTintColor={'black'}
          >
            <Scene key="_detail" component={MatchDetail} />
          </Scene>
          <Scene
            key="login"
            hideNavBar={false}
            sceneStyle={{ backgroundColor: 'rgb(236,236,236)' }}
            title=""
            back
            backButtonTintColor={'black'}
          >
            <Scene key="_login" component={Login} />
          </Scene>
          <Scene
            key="profil"
            hideNavBar={false}
            sceneStyle={{ backgroundColor: 'rgb(236,236,236)' }}
            back
            backButtonTintColor={'black'}
            rightButtonTextStyle={styles.buttonTextStyle}
            title="Profil"
            rightTitle="Upraviť"
            onBack={() => {
              const set = new SetRouter();
              set.saveData();
            }}
            onRight={() => {
              const set = new SetRouter();
              set.profileEdit();
            }}
          >
            <Scene key="_profil" component={Profil} />
          </Scene>
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: 'grey'
  },
  tabBarSelectedItemStyle: {
    backgroundColor: 'red'
  },
  labelStyle: {
    fontSize: 12,
    letterSpacing: 0.1,
    alignSelf: 'center',
    maxHeight: 18
  },
  buttonTextStyle: {
    color: 'black'
  }
});

const mapStateToProps = ({ ui }) => {
  const { filterSwitch } = ui;
  return { filterSwitch };
};

export default connect(mapStateToProps, {
  filter,
  getAllDelegation,
  filterChanged,
  loggedInChange,
  profileFetchData,
  loadLastTimestamp
})(RouterS);
