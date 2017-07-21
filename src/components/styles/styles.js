import { Platform } from 'react-native';

export const loginStyle = {
  containerStyle: {
    flex:1,
    marginTop: (Platform.OS === 'ios') ? 64 : 44,
  }
};

export const routerStyle = {

};

export const drawerStyle = {
  main: {
    shadowColor: '#000000',
    shadowOpacity: 1,
    shadowRadius: 10,
    backgroundColor: '#505050',
  },
  drawer: {},
};
