import React, { Component } from 'react';
import { View, Picker } from 'react-native';


class FilterHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      liga: ''
    };
  }
  pickerItems(items) {
    return (
      items.map(item =>
        <Picker.Item label={item.label} value={item.value} />
      )
    );
  }

  pickers(data) {
    return (
      data.map(item =>
        <View style={{ flex: 1, flexDirection: 'column' }} >
          <Picker
            selectedValue={this.state.liga}
            onValueChange={(itemValue) => this.setState({ liga: itemValue })}
          >
            {this.pickerItems(item.sectionItems)}
          </Picker>
        </View>
      )
    );
  }

  render() {
    const styles = {
      containerCard: {
        flex: 1,
        padding: 10,
        backgroundColor: '#D65153',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      }
    };
    const { style, data } = this.props;
    return (
      <View style={[style, styles.containerCard]}>
        {this.pickers(data)}
      </View>
    );
  }
}

export default FilterHeader;
