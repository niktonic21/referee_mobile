import React, { Component } from 'react';
import { View, Text } from 'react-native';

const CardItem = ({ styl, children }) => {
  return(
    <View style={[styles.containerItem,styl]}>
      {children}
    </View>
  );
};

const styles = {
  containerItem: {
    flex:1,
    margin: 5,
    //flexDirection: 'row',
    alignSelf: 'stretch',
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 5},
    // shadowOpacity: 0.3,
    // shadowRadius: 2
  }
}

export { CardItem };
