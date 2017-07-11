import React, { Component } from 'react';
import { View, Text } from 'react-native';

const Card = ({flexDir, children }) => {

  direction = flexDir ? {flexDirection: flexDir} : {flexDirection: 'column'}

  return(
    <View style={[styles.containerCard,direction]}>
      {children}
    </View>
  );
};

const styles = {
  containerCard: {
    flex:1,
    margin: 5,
    padding: 5,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 9,
    alignItems: 'center'
  }
}

export { Card };
