
import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { View } from 'react-native';
import MatchDetail from '../ui/MatchDetail';
import { MatchItem } from '../reusable/MatchItem';
import { ListPlaceholder } from '../reusable/ListPlaceholder';
import { getDelegation, loggedInChange, profileFetchData } from '../../actions';

class Zapasy extends Component {

  componentWillMount() {
    this.props.getDelegation(1);
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.props.loggedInChange(user, this.props.loggedIn = true);
          this.props.profileFetchData();
        } else {
          this.props.loggedInChange(user, this.props.loggedIn = false);
        }
      });
  }

  convertArrayToMap(array, category) {
    const categoryMap = {};
    const sections = [];// Create the blank map
    array.forEach(item => {
      if (!categoryMap[item[category]]) {
        sections.push(item[category]);
        categoryMap[item[category]] = [];
      }
      item.key = item.cislo;
      categoryMap[item[category]].push(item);
    });

  const result = sections.map((sec, index) => {
      const sekcia = {};
      sekcia.title = sec;
      sekcia.data = categoryMap[sec];
      sekcia.key = String(index);
      return sekcia;
    });
    return result;
  }

  render() {
    const delegacia = this.props.delegation;
    const item = <MatchItem placeholder='true' />;
    return (
      delegacia === null ? <ListPlaceholder size={6} view={item} /> :
      <View style={{ flex: 1, backgroundColor: 'rgb(228, 228, 228)' }}>
        <MatchDetail data={this.convertArrayToMap(delegacia, 'liga')} />
      </View>
    );
  }

}
const mapStateToProps = ({ data }) => {
  const { delegation } = data;
  return { delegation };
};

export default connect(mapStateToProps,
   { getDelegation, loggedInChange, profileFetchData })(Zapasy);
