import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    Animated
} from 'react-native';
import { connect } from 'react-redux';
import { Button } from '../reusable';
import FilterHeader from '../reusable/FilterHeader';

const idLiga = 0;
const idMesiac = 1;
const idRozhodca = 2;

 const datum = [{ label: '1', value: 'August' }, 
            { label: '2', value: 'September' }, 
            { label: '3', value: 'Oktober' }];

const datumData = [{ sectionItems: [
  { label: 'Mesiac', value: 'Mesiac' }, 
  { label: 'August', value: 'August' }, 
  { label: 'September', value: 'September' }, 
  { label: 'Oktober', value: 'Oktober' }] }];

class FilterTabHeader extends Component {
  constructor(props) {
    super(props);
    this.buttonID = null;
    this.pickerData = this.props.filterData;
    this.state = {
      showPicker: false,
      height: new Animated.Value(0),
      opacity: new Animated.Value(0),
      visible: false
    };
  }

  componentWillReceiveProps(nextProps) {
   if (this.props.closeHeader === true && nextProps.closeHeader === false) {
     this.setState({
      showPicker: false
    });
    this.buttonID = null;
   }
  }

  showPicker(idBtn = 0) {
    if (idBtn === this.buttonID || this.buttonID === null) { 
      if (this.state.showPicker) {
        this.setState({
          showPicker: false
        });
        this.headerOff();
        this.buttonID = null;
      } else {
        this.setState({
          showPicker: true
        });
        this.buttonID = idBtn;
        this.selectPickerData(this.buttonID);                
        this.headerOn();
      }  
    } else {
      this.buttonID = idBtn;
      this.selectPickerData(this.buttonID);
    }
  }

  selectPickerData(id) {
    if (id === idLiga) {
      this.pickerData = this.props.filterData;
    } else if (id === idMesiac) {
      this.pickerData = datumData;
    } else {
      this.pickerData = this.props.filterData;
    }
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
      this.props.isVisible(0);
      this.setState({ showPicker: false });
  }

  headerOn() {
    Animated.timing(this.state.height, {
      duration: this.slideDuration,
      toValue: this.props.headerHeight,
    }).start();
    Animated.timing(this.state.opacity, {
      duration: this.slideDuration,
      toValue: 1,
    }).start();
    this.props.isVisible(150);
    this.setState({ showPicker: true });
  }


  renderFilter() {
    return ( 
        <FilterHeader 
          selectedItem={(value) => this.setState({ pickerItem: value })} 
          data={this.pickerData} 
        /> 
    );
  }
  render() {
    console.log('Picker', this.buttonID, this.pickerData);     
    return (
        <View style={styles.container}>
          <View style={styles.containerButtons}>
            <Button onPress={() => { this.showPicker(idLiga); }} style={styles.buttons}>
              {this.state.pickerItem || 'Liga'}
            </Button>
            <Button onPress={() => { this.showPicker(idMesiac); }} style={styles.buttons}>
              {this.state.pickerItem || 'Mesiac'}
            </Button>
            <Button onPress={() => { this.showPicker(idRozhodca); }} style={styles.buttons}>
              {this.state.pickerItem || 'Rozhodca'}
            </Button>
          </View>
          <Animated.View 
            style={[styles.header, { height: this.state.height }, 
                  { opacity: this.state.opacity }]}
          >
            {this.renderFilter()}
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
   null)(FilterTabHeader);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'column',
    alignItems: 'center',
    // backgroundColor: 'black',
    // paddingVertical: 5,
    // paddingHorizontal: 5
  },
  containerButtons: {
    flex: 1,
    maxHeight: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingVertical: 5,
    paddingHorizontal: 5
  },
  header: {
    position: 'absolute',
    marginTop: 50,
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
  },
  buttons: {
    flex: 1,
    backgroundColor: 'red', 
    width: (Dimensions.get('window').width / 3) - 5, 
    height: 30,
    marginRight: 5,
    borderColor: 'red'
  }
});
