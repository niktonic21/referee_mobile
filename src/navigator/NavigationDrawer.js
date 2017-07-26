import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import { DefaultRenderer, Actions } from 'react-native-router-flux';
import { drawerStyle } from '../components/styles/styles';
import PageView from './PageView';

class NavigationDrawer extends Component {

  render() {
    const state = this.props.navigationState;
    const children = state.children;

    return (
      <Drawer
        ref="drawer"
        type="displace"
        styles={drawerStyle}
        open={state.open}
        onOpen={() => Actions.refresh({ key: state.key, open: true })}
        onClose={() => Actions.refresh({ key: state.key, open: false })}
        content={<PageView />}
        tapToClose
        openDrawerOffset={0.4}
        panCloseMask={0.4}
        negotiatePan
        tweenHandler={(ratio) => ({
          main: { marginTop: ratio * 35 },
        })}
      >
        <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
      </Drawer>
    );
  }
}


export default NavigationDrawer;
