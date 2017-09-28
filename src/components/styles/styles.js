import { Platform } from 'react-native';

export const loginStyle = {
  containerStyle: {
    flex: 1,
    padding: 5,
    marginTop: (Platform.OS === 'ios') ? 64 : 44,
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginLeft: 13,
    marginRight: 13,
  },
};

export const profileStyle = {
  imageContainer: {
    // //flex: 1
     borderRadius: 62,
     margin: 15,
     borderColor: '#ddd',
     shadowColor: '#000',
     shadowOffset: { width: 0, height: 2 },
     shadowOpacity: 0.8,
     shadowRadius: 2,
  },
  image: {
    borderRadius: 62,
    height: 124,
    width: 124,
  },
  inputLabel: {
    flex: 2,
    fontSize: 16,
    paddingLeft: 0,
    marginTop: 5,
    color: 'rgb(128,128,128)',
  },
  inputContainer: {
    flexDirection: 'column',
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(180,180,180)',
    marginLeft: 13,
    marginRight: 20,
    height: 60
  },
  inputText: {
    flex: 3,
    fontSize: 19,
    fontWeight: '500',
    paddingLeft: 0,
    marginBottom: 7
  },
  name: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 10
  }
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

export const listStyle = {
  font: {
    fontSize: 10,
    lineHeight: 18
  }
}
