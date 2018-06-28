import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
//import { Divider } from './Divider';

const DrawerButton = ({ onPress, text }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <View style={{ flexDirection: 'row', width: 150 }}>
        <Text style={textStyle}>{text}</Text>
        <Icon name="ios-arrow-forward" size={24} color="grey" />
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    flex: 1,
    alignSelf: 'flex-start',
    color: 'white',
    fontSize: 16,
    //paddingTop: 10,
    //paddingBottom: 10,
    fontWeight: '500',
    paddingTop: 3,
    paddingBottom: 3
  },
  buttonStyle: {
    flex: 1,
    //alignSelf: 'stretch',
    maxHeight: 45,
    alignSelf: 'baseline',
    backgroundColor: 'rgba(0,0,0,0)',
    marginLeft: 5,
    marginRight: 5,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10
  }
};

export { DrawerButton };
