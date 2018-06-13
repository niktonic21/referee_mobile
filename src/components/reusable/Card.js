import React from 'react';
import { View } from 'react-native';

const Card = ({ flexDir, aligning, children, key, styl }) => {
    const direction = flexDir ? { flexDirection: flexDir } : { flexDirection: 'column' };
    const align = aligning ? { alignItems: aligning } : { alignItems: 'center' };
    return (
        <View style={[styles.containerCard, direction, align, styl]} key={key}>
            {children}
        </View>
    );
};

const styles = {
    containerCard: {
        flex: 1,
        margin: 5,
        padding: 3,
        backgroundColor: 'white',
        borderColor: 'rgb(200,200,200)',
        borderWidth: 1,
        borderRadius: 10,
        shadowColor: '#000'
        // shadowOffset: { width: 0, height: 5 },
        // shadowOpacity: 0.3,
        // shadowRadius: 2
    }
};

export { Card };
