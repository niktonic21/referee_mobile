/**
  This class is responsible fot correct app navigation.
*/

import React, { Component } from 'react';
import { StatusBar, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Login from '../components/pages/Login';
import Zapasy from '../components/pages/Zapasy';
import Profil from '../components/pages/Profil';
import TabIcon from './TabIcon';
import SetRouter from './SetRouter';
import { filter, getAllDelegation } from '../redux/actions';

class RouterS extends Component {
    componentWillMount() {
        //this.props.getAllDelegation();
    }

    renderRightButton() {
        return (
            <TouchableOpacity
                onPress={() => {
                    this.props.filter(!this.props.filterSwitch);
                }}
            >
                <Text> FILTER </Text>
            </TouchableOpacity>
        );
    }

    render() {
        StatusBar.setBarStyle('dark-content', true);
        return (
            <Router
                titleStyle={{ color: 'black' }}
                leftButtonIconStyle={{ tintColor: 'black' }}
                navigationBarStyle={{ backgroundColor: '#D65153', borderBottomWidth: 0 }}
            >
                <Scene
                    key="main"
                    tabs
                    tabBarStyle={styles.tabBarStyle}
                    labelStyle={styles.labelStyle}
                    inactiveTintColor={'black'}
                    activeTintColor={'white'}
                    indicatorStyle={{ backgroundColor: 'red' }}
                >
                    <Scene
                        key="zapasy"
                        icon={TabIcon}
                        sceneStyle={{ backgroundColor: 'rgb(236,236,236)' }}
                        component={Zapasy}
                        title="Zapasy"
                        initial
                        renderRightButton={() => this.renderRightButton()}
                    />
                    <Scene key="vyctovanie" icon={TabIcon} component={Login} title="Vyctovanie" />
                    <Scene key="statistiky" icon={TabIcon} component={Login} title="Statistiky" />
                    <Scene key="nastavenia" icon={TabIcon} component={Login} title="Nastavenia" />
                    <Scene
                        key="profil"
                        component={Profil}
                        sceneStyle={{ backgroundColor: 'rgb(236,236,236)' }}
                        title="Profil"
                        rightTitle="Upravit"
                        onRight={() => {
                            const set = new SetRouter();
                            set.profileEdit();
                        }}
                    />
                </Scene>
            </Router>
        );
    }
}

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: 'grey'
    },
    tabBarSelectedItemStyle: {
        backgroundColor: 'red'
    },
    labelStyle: {
        fontSize: 12,
        letterSpacing: 0.1,
        alignSelf: 'center',
        maxHeight: 18
    }
});

const mapStateToProps = ({ ui }) => {
    const { filterSwitch } = ui;
    return { filterSwitch };
};

export default connect(mapStateToProps, { filter, getAllDelegation })(RouterS);
