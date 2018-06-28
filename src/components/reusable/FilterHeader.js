import React, { Component } from 'react';
import { View, Picker } from 'react-native';

class FilterHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    const val = nextProps.select && nextProps.select !== null ? nextProps.select : '';
    this.setState({ selected: val });
  }

  pickerItems(items) {
    return items.map(item => {
      if (typeof item === 'string') {
        return <Picker.Item label={item} value={item} key={item} />;
      }
      if (typeof item === 'object' && typeof item.label === 'string') {
        return <Picker.Item label={item.label} value={item.value} key={item.label} />;
      }
      return null;
    });
  }

  pickers(data) {
    return (
      <View style={{ flex: 1, height: 150, flexDirection: 'column' }} key={this.state.selected}>
        <Picker
          key={this.state.selected}
          selectedValue={this.state.selected}
          onValueChange={itemValue => {
            this.props.selectedItem(itemValue);
            this.setState({ selected: itemValue });
          }}
        >
          {this.pickerItems(data)}
        </Picker>
      </View>
    );
  }

  render() {
    const styles = {
      containerCard: {
        flex: 1,
        height: 150,
        //marginTop: 50,
        //backgroundColor: '#D65153',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      }
    };
    const { style, data } = this.props;
    return <View style={[style, styles.containerCard]}>{this.pickers(data)}</View>;
  }
}

export default FilterHeader;
