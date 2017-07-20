import React from 'react';
import { View } from 'react-native';

const Card = ({ flexDir, aligning, children }) => {
 const direction = flexDir ? { flexDirection: flexDir } : { flexDirection: 'column' };
 const align = aligning ? { alignItems: aligning } : { alignItems: 'center' }
  return (
    <View style={[styles.containerCard, direction, align]}>
      {children}
    </View>
  );
};

const styles = {
  containerCard: {
    margin: 3,
    padding: 3,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 5 },
    // shadowOpacity: 0.3,
    // shadowRadius: 2
  }
};

export { Card };
