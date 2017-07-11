import React, { Component } from 'react';
import { View, Text } from 'react-native';

const Card = (props) => {

  direction = props.flexDirection ? {flexDirection: props.flexDirection} : {flexDirection: 'column'}

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
    alignItems: 'center'
  }
}

export default Card;
