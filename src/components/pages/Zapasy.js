
import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { View } from 'react-native';
import MatchDetail from '../ui/MatchDetail';
import { MatchItem } from '../reusable/MatchItem';
import { ListPlaceholder } from '../reusable/ListPlaceholder';
import { getDelegation, getAllDelegation, loggedInChange, profileFetchData } from '../../actions';
import { convertArrayToMap, getSections } from '../../utils/Utils';

class Zapasy extends Component {

  componentWillMount() {
    this.props.getDelegation(2);
//    console.log('ALL____', this.props.getAllDelegation());

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.loggedInChange(user, this.props.loggedIn = true);
        this.props.profileFetchData();
      } else {
        this.props.loggedInChange(user, this.props.loggedIn = false);
      }
    });
  }

  render() {
    // const filterData = [{ sectionItems: [
    //   { label: '1', value: '1' }] },
    //   { sectionItems: [{ label: '2', value: '2' }] },
    //   { sectionItems: [{ label: '3', value: '3' }] }
    // ];
    const delegacia = this.props.delegation;
    const matchData = delegacia === null ? null : convertArrayToMap(delegacia, 'liga');
    const filterData = matchData === null ? [{ sectionItems: [{ label: '', value: '' }] }] :
     [{ sectionItems: getSections(matchData) }];
     console.log('FLITER', filterData);
    const item = <MatchItem placeholder='true' />;

    const matches = delegacia === null ? 
      <ListPlaceholder size={6} view={item} /> :
        (<View style={{ flex: 1, backgroundColor: 'rgb(228, 228, 228)' }}>
          <MatchDetail data={convertArrayToMap(delegacia, 'liga')} filterData={filterData} />
        </View>);
    return (matches);
  }

}
const mapStateToProps = ({ data }) => {
  const { delegation } = data;
  return { delegation };
};

export default connect(mapStateToProps,
   { getDelegation, getAllDelegation, loggedInChange, profileFetchData })(Zapasy);
