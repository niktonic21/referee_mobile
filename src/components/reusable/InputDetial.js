import React, { PureComponent } from 'react';
import { View, TextInput, Text, StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
class InputDetial extends PureComponent {
    render() {
        const {
            styleContainer,
            styleLabel,
            styleInput,
            label,
            value,
            onChangeText,
            placeholder,
            editable
        } = this.props;
        const { containerStyle, inputStyle, labelStyle } = styles;
        return (
            <View style={[containerStyle, styleContainer]}>
                <Text style={[labelStyle, styleLabel]}>{label}</Text>
                <TextInput
                    placeholder={placeholder}
                    autoCorrect={false}
                    value={value}
                    multiline
                    editable={editable}
                    onChangeText={onChangeText}
                    style={[inputStyle, styleInput]}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignSelf: 'flex-start'
    },
    labelStyle: {
        flex: 1,
        color: 'grey',
        fontSize: 14,
        paddingTop: 10,
        paddingHorizontal: 15
    },
    inputStyle: {
        flex: 1,
        flexWrap: 'wrap',
        color: 'black',
        fontSize: 17,
        width: width - 20,
        lineHeight: 20,
        paddingTop: 4,
        paddingBottom: 10,
        paddingHorizontal: 15
    }
});

export { InputDetial };
