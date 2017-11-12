import React, { Component } from 'react';
import {
    Animated,
    StyleSheet,
    View,
} from 'react-native';
import { connect } from 'react-redux';
import FilterTabHeader from './FilterTabHeader';

const pickerHeight = 150;
class HeadScroll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: new Animated.Value(this.props.headerHeight),
      opacity: new Animated.Value(1), // The header opacity 
      pickerSize: pickerHeight,     
      visible: true && this.props.filterSwitch,
    };
    this.slideDuration = 600;
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
    Animated.timing(this.state.opacity, {
      duration: this.slideDuration,
      toValue: 0,
    }).start();
    this.setState({ visible: false && this.props.filterSwitch });
  }

  headerOn(extraHeight = 0) {
    Animated.timing(this.state.height, {
      duration: this.slideDuration,
      toValue: this.props.headerHeight + extraHeight,
    }).start();
    Animated.timing(this.state.opacity, {
      duration: this.slideDuration,
      toValue: 1,
    }).start();
    this.setState({ visible: true && this.props.filterSwitch });
  }

  render() {
    const { ScrollableComponent, filterData } = this.props;
    return (
      <View style={styles.container}>
        <Animated.View style={[{ top: this.state.height }]}>
          <ScrollableComponent
            onScroll={this.onScroll.bind(this)}
            {...this.props}
          >
            {this.props.children}
          </ScrollableComponent>
        </Animated.View>
        <Animated.View 
            style={[styles.header, { height: this.state.height }, 
                  { opacity: this.state.opacity }]}
        >
          <FilterTabHeader
            headerHeight={pickerHeight} 
            isVisible={(isOpen) => {
              this.headerOn(isOpen);
            }}
            closeHeader={this.state.visible}
            filterData={filterData} 
          />
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
