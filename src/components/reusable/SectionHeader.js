import React from 'react';
import { View, Text } from 'react-native';

const SectionHeader = props => {
    const num = props.number ? '(' + props.number + ')' : null;
    return (
        <View style={[styles.containerCard, props.style]}>
            <Text style={{ color: 'black' }}>
                {props.title} {num}
            </Text>
        </View>
    );
};

const styles = {
    containerCard: {
        padding: 10,
        backgroundColor: '#b2b2b2' //'',
    }
};

export { SectionHeader };
