import React from 'react';
import { View } from 'react-native';

const CardItem = ({ styl, children }) => (
    <View style={[styles.containerItem, styl]}>
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
