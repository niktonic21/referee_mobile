
import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import MatchDetail from '../ui/MatchDetail';
import { MatchItem } from '../reusable/MatchItem';
import {ListPlaceholder} from '../reusable/ListPlaceholder';
import { getDelegation } from '../../actions';
import { connect } from 'react-redux';

class Zapasy extends Component {

  componentWillMount(){
    this.props.getDelegation(1);
  }

  convertArrayToMap(array, category) {
    let categoryMap = {};
    const sections = [];// Create the blank map
    array.forEach(item => {
      if (!categoryMap[item[category]]) {
        sections.push(item[category]);
        categoryMap[item[category]] = [];
      }
      categoryMap[item[category]].push(item);
    });

    const result = sections.map((sec, index) => {
      let sekcia = {};
      sekcia.title = sec;
      sekcia.data = categoryMap[sec];
      sekcia.key = String(index);
      return sekcia
    })
    return result;
  }

  render() {
    const delegacia = this.props.delegation;
    const item = <MatchItem placeholder='true' />;
    return (
      delegacia === null ? <ListPlaceholder size={5} view={item} /> :
      <View style={{flex: 1}}>
        <MatchDetail data={this.convertArrayToMap(delegacia,'liga')}/>
      </View>
    );
  }

}
const mapStateToProps = ({ data }) => {
  const { delegation } = data;
  return { delegation };
};
export default connect (mapStateToProps, { getDelegation })(Zapasy);
