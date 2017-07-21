import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Card from './Card';

const SectionHeader = (props) => {
  return(
      <View style={[styles.containerCard,props.style]}>
        <Text style={{color: 'white'}} >{props.title}</Text>
      </View>
  );
};

const styles = {
  containerCard: {
    padding: 10,
    backgroundColor: '#D65153',
  }
}

export { SectionHeader };
