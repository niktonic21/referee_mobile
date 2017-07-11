import React, { Component } from 'react';
import { View, Text } from 'react-native';

const CardItem = (props) => {
  return(
    <View style={styles.containerItem}>
      {props.children}
    </View>
  );
};

const styles = {
  containerItem: {
    margin: 5,
    flexDirection: 'column'
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 5},
    // shadowOpacity: 0.3,
    // shadowRadius: 2
  }
}

export default CardItem;
