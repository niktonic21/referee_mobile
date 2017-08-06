import React from 'react';
import { View } from 'react-native';

const CardItem = ({ style, children }) => (
    <View style={[styles.containerItem, style]}>
      {children}
    </View>
  );

const styles = {
  containerItem: {
    margin: 5,
    //flexDirection: 'row',
    alignSelf: 'center',
  }
};

export { CardItem };
