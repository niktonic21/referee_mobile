import React, { Component } from 'react';
import { View } from 'react-native';

const Divider = (props) => {
  switch(props.orientation) {
    case 'vertical':
      return(
          <View style={{width: 1, height: props.length,
            backgroundColor: props.color}}/>
      );
    case 'horizontal':
      return(
          <View style={{width: props.length,
            height: 1, backgroundColor: props.color}}/>
      );
    default:
      return(null);
  }
};


export default Divider;
