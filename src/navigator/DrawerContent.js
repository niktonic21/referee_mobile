import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ViewPropTypes } from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
// import { Button } from '../components/reusable';

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: 'transparent',
  //   borderWidth: 2,
  //   borderColor: 'red',
  // },
  menu: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
 },
 container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#505050',
    width: 800,
    paddingTop: 40,
 },
  buttonText: {
    textAlign: 'left',
    color: 'rgba(252,252,252,1)',
    fontSize: 15,
    paddingLeft: 10
  },
  buttonContainer: {
    height: 45,
    justifyContent: 'center',
    backgroundColor: 'grey'
  },
  title: {
    textAlign: 'left',
    color: 'grey',
    fontSize: 17,
    paddingLeft: 10,
    paddingTop: 20
  },
});

class DrawerContent extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    sceneStyle: ViewPropTypes.style,
    title: PropTypes.string,
  }

  // static contextTypes = {
  //   drawer: React.PropTypes.object,
  // }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.menu}>
        <Text style={styles.title}>Hlavné Menu</Text>
        <Button
            text={'Login'}
            onPress={() => {
              Actions.login();
              //setTimeout(() => Actions.refresh({ key: 'drawer', open: false }), 0);
            }}
        >
          Login
        </Button>
        <Button
            text={'Zápasy'}
            onPress={() => {
              Actions.zapasy();
              //setTimeout(() => Actions.refresh({ key: 'drawer', open: false }), 0);
            }}
        >
          Zápasy
        </Button>
        <Button
            text={'Profil'}
            onPress={() => {
              Actions.profil();
              //setTimeout(() => Actions.refresh({ key: 'drawer', open: false }), 0);
            }}
        >
          Profil
        </Button>
      </View>
    </View>
    );
  }
}

export default DrawerContent;
