import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const PageView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <Text style={styles.title}>Hlavné Menu</Text>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
              Actions.login();
              setTimeout(() => Actions.refresh({ key: 'drawer', open: false }), 0);
            }}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            Actions.zapasy();
            setTimeout(() => Actions.refresh({ key: 'drawer', open: false }), 0);
          }}
        >
          <Text style={styles.buttonText}>Zapasy</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = {
   menu: {
     flex: 1,
     flexDirection: 'column'
   },
   container: {
      flex: 1,
      width: 375 * 2,
      flexDirection: 'row',
      backgroundColor: 'black'
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
