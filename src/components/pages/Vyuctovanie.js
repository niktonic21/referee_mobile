import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import MojeZapsyList from '../ui/MojeZapasyList';

import { MatchItem } from '../reusable';

import { loggedInChange } from '../../redux/actions';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width
};

const FirstRoute = () => <View style={[styles.container, { backgroundColor: '#ff4081' }]} />;
const SecondRoute = () => <View style={[styles.container, { backgroundColor: '#673ab7' }]} />;

class Vyuctovanie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [{ key: 'first', title: 'Moje Zápasy' }, { key: 'second', title: 'PDF' }]
    };
  }

  handleIndexChange = index => {
    this.setState({ index });
  };

  // scrollEnabled?: boolean
  // pressColor?: string
  // pressOpacity?: number
  // getLabelText?: (scene: Scene<T>) => string | undefined | null
  // renderLabel?: (scene: Scene<T>) => ReactNode
  // renderIcon?: (scene: Scene<T>) => ReactNode
  // renderBadge?: (scene: Scene<T>) => ReactNode
  // renderIndicator?: (props: IndicatorProps<T>) => ReactNode
  // onTabPress?: (scene: Scene<T>) => void
  // tabStyle?: StyleProp<ViewStyle>
  // indicatorStyle?: StyleProp<ViewStyle>
  // labelStyle?: StyleProp<ViewStyle>
  // style?: StyleProp<ViewStyle>
  renderHeader = props => (
    <TabBar
      {...props}
      //pressColor={'white'}
      pressOpacity={0.7}
      labelStyle={styles.labelStyle}
      style={styles.tabContainer}
      tabStyle={styles.tabStyle}
    />
  );

  renderScene = SceneMap({
    first: MojeZapsyList,
    second: SecondRoute
  });

  render() {
    if (this.props.loggedIn === null || !this.props.loggedIn) {
      return (
        <View style={{ flex: 1 }}>
          <Text style={styles.noDataText}> Prihlas sa najprv.</Text>
        </View>
      );
    }
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this.renderScene}
        renderHeader={this.renderHeader}
        onIndexChange={this.handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabContainer: {
    backgroundColor: 'grey',
    shadowOpacity: 0.8,
    shadowRadius: 2
  },
  tabStyle: {
    backgroundColor: 'lightgrey'
  },
  labelStyle: {
    color: 'black'
  },
  noDataText: {
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: 100
  }
});

const mapStateToProps = ({ auth }) => {
  const { user, loggedIn } = auth;
  return {
    user,
    loggedIn
  };
};

export default connect(mapStateToProps, {
  loggedInChange
})(Vyuctovanie);
