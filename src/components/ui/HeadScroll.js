import React, { Component } from 'react';
import {
    Animated,
    StyleSheet,
    View,
} from 'react-native';
import { connect } from 'react-redux';

class HeadScroll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: new Animated.Value(-340),
      visible: true && this.props.filterSwitch,
    };
    this.slideDuration = 500;
  }

  componentWillReceiveProps(newProps) {
    if (newProps.filterSwitch) {
      this.headerOn();
    } else {
      this.headerOff();
    }
  }

  onScroll(event) {
    const currentOffset = event.nativeEvent.contentOffset.y;

    // Ignore scroll events outside the scrollview
    if (currentOffset < 0 || currentOffset > (event.nativeEvent.contentSize.height -
        event.nativeEvent.layoutMeasurement.height)) {
      return;
    }

    if (currentOffset > this.offset && this.state.visible && this.props.filterSwitch) {
      this.headerOff();
    } else if (currentOffset < this.offset && !this.state.visible && this.props.filterSwitch) {
      this.headerOn();
    }
    this.offset = currentOffset;
  }

  headerOff() {
    Animated.timing(this.state.height, {
      duration: this.slideDuration,
      toValue: 0,
    }).start();
    this.setState({ visible: false && this.props.filterSwitch });
  }

  headerOn() {
    Animated.timing(this.state.height, {
      duration: this.slideDuration,
      toValue: this.props.headerHeight,
    }).start();
    this.setState({ visible: true && this.props.filterSwitch });
  }

  render() {
    console.log(this.state.visible);
    const { headerComponent, ScrollableComponent } = this.props;
    return (
      <View style={styles.container}>
        <ScrollableComponent
          onScroll={this.onScroll.bind(this)}
          {...this.props}
        >
          <View style={{ marginTop: this.props.headerHeight }}>
            {this.props.children}
          </View>
        </ScrollableComponent>
        <Animated.View style={[styles.header, { marginTop: this.state.height }]}>
          {headerComponent}
        </Animated.View>
      </View>
    );
  }
}

const mapStateToProps = ({ ui }) => {
  const { filterSwitch } = ui;
  return { filterSwitch };
};

export default connect(mapStateToProps,
   null)(HeadScroll);


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
  },
});
