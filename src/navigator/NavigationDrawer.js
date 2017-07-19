import React, { PropTypes } from 'react';
import Drawer from 'react-native-drawer';
import { DefaultRenderer, Actions } from 'react-native-router-flux';

//import SideDrawerContent from './SideDrawerContent'
import PageView from './PageView'

class NavigationDrawer extends React.Component {

  render() {
    const state = this.props.navigationState;
    const children = state.children;
    return (
      <Drawer
        ref="drawer"
        type="displace"
        open={state.open}
        onOpen={() => Actions.refresh({ key: state.key, open: true })}
        onClose={() => Actions.refresh({ key: state.key, open: false })}
        content={<PageView />}
        tapToClose
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        negotiatePan
        tweenHandler={(ratio) => ({
          main: { paddingTop: ratio * 20 },
        })}
      >
        <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
      </Drawer>
    );
  }
}


export default NavigationDrawer;
