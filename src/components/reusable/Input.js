import React from 'react';
import { View, TextInput, Text } from 'react-native';

const Input = ({
  styleContainer,
  styleLabel,
  styleInput,
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  editable
}) => {
  const { containerStyle, inputStyle, labelStyle } = styles;
  return (
    <View style={[containerStyle, styleContainer]}>
      <Text style={[labelStyle, styleLabel]}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        value={value}
        editable={editable}
        onChangeText={onChangeText}
        style={[inputStyle, styleInput]}
      />
    </View>
  );
};

const styles = {
  containerStyle: {
    //flex: 1,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center'
  },
  inputStyle: {
    color: '#000',
    fontSize: 18,
    lineHeight: 23,
    flex: 5,
    alignSelf: 'stretch'
  },
  labelStyle: {
    fontSize: 18
    //flex: 1
  }
};

export { Input };
