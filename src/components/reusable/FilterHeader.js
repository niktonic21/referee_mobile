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
        <Picker.Item label={item.label} value={item.value} key={item.value} />
      )
    );
  }

  pickers(data) {
    return (
      data.map(item =>
        <View style={{ flex: 1, height: 150, flexDirection: 'column' }} key={this.state.liga} >
          <Picker
            selectedValue={this.state.liga}
            onValueChange={(itemValue) => {
              console.log(itemValue); 
              this.props.selectedItem(itemValue);
              this.setState({ liga: itemValue }); 
            }}
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
    return (
      <View style={[style, styles.containerCard]}>
        {this.pickers(data)}
      </View>
    );
  }
}

export default FilterHeader;
