import React, { Component } from 'react';
import { View, Text } from 'react-native';
const HEIGHT_OF_NAVBAR = 64;

const Card = (props) => {
  direction = '';
  switch (props.flexDirection) {
    case 'row':
      direction = {flexDirection: 'row'}
      break;
    case 'row':
      direction = {flexDirection: 'column'}
      break;
    default:
      direction = {flexDirection: 'column'}
  }

  return(
    <View style={[styles.containerCard,direction]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerCard: {
    margin: 5,
    padding: 5,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 9,
    //flexDirection: 'column',
    alignItems: 'center'
    //position: 'relative'
  }
}

export default Card;
