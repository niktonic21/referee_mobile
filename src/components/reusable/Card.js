import React from 'react';
import { View } from 'react-native';

const Card = ({ flexDir, children }) => {
 const direction = flexDir ? { flexDirection: flexDir } : { flexDirection: 'column' };

  return (
    <View style={[styles.containerCard, direction]}>
      {children}
    </View>
  );
};

const styles = {
  containerCard: {
    margin: 5,
    padding: 5,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 9,
    alignItems: 'center',
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 5 },
    // shadowOpacity: 0.3,
    // shadowRadius: 2
  }
};

export { Card };
