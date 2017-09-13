import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ style, textStyl, onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle, style]}>
      <Text style={[textStyle, textStyl]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    flex: 1,
    alignSelf: 'center',
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
    paddingTop: 3,
    paddingBottom: 3
  },
  buttonStyle: {
    maxHeight: 30,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#ccc',
    paddingLeft: 15,
    paddingRight: 15,
  }
};

export { Button };
