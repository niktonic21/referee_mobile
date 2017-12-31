import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string,
};

const TabIcon = (props) => {
    let ico = null;
    switch (props.title) {
        case 'Zapasy':
            ico = 'md-list';
            break;
        case 'Vyctovanie':
            ico = 'md-cash';
            break;
        case 'Statistiky':
            ico = 'md-stats';
            break;
        case 'Nastavenia':
            ico = 'md-menu';
            break;
        default :
            ico = 'md-menu';
    }
    return (  
        <View style={{ marginBottom: 35 }}>
            <Ionicons name={ico} size={32} color="white" />
        </View>
    );
    
}


TabIcon.propTypes = propTypes;

export default TabIcon;
