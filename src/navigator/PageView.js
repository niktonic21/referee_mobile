import React from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { DrawerButton } from '../components/reusable';

const PageView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <Text style={styles.title}>Hlavné Menu</Text>
        <DrawerButton
            text={'Login'}
            onPress={() => {
              Actions.login();
              setTimeout(() => Actions.refresh({ key: 'drawer', open: false }), 0);
            }}
        />
        <DrawerButton
            text={'Zápasy'}
            onPress={() => {
              Actions.zapasy();
              setTimeout(() => Actions.refresh({ key: 'drawer', open: false }), 0);
            }}
        />
        <DrawerButton
            text={'Profil'}
            onPress={() => {
              Actions.profil();
              setTimeout(() => Actions.refresh({ key: 'drawer', open: false }), 0);
            }}
        />
        <DrawerButton
            text={'Štatistiky'}
            onPress={() => {
              Actions.zapasy();
              setTimeout(() => Actions.refresh({ key: 'drawer', open: false }), 0);
            }}
        />
        <DrawerButton
            text={'PDF'}
            onPress={() => {
              Actions.zapasy();
              setTimeout(() => Actions.refresh({ key: 'drawer', open: false }), 0);
            }}
        />
        <View style={{ padding: 30 }} />
        <Text style={styles.title}>Ostatné</Text>
        <DrawerButton
            text={'Štadióny'}
            onPress={() => {
              Actions.zapasy();
              setTimeout(() => Actions.refresh({ key: 'drawer', open: false }), 0);
            }}
        />
        <DrawerButton
            text={'Všetky zápasy'}
            onPress={() => {
              Actions.zapasy();
              setTimeout(() => Actions.refresh({ key: 'drawer', open: false }), 0);
            }}
        />
        <DrawerButton
            text={'Nastavenia'}
            onPress={() => {
              Actions.zapasy();
              setTimeout(() => Actions.refresh({ key: 'drawer', open: false }), 0);
            }}
        />
      </View>
    </View>
  );
};

const styles = {
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
};

export default PageView;
