import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Card from './Card';

const SectionHeader = (props) => {
  return(
      <View style={[styles.containerCard,props.style]}>
        <Text>{props.title}</Text>
      </View>
  );
};

const styles = {
  containerCard: {
    padding: 10,
    backgroundColor: 'rgb(102,178,255)',
  }
}

export default SectionHeader;
