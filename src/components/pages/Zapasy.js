import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, SectionList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { MatchItem, SectionHeader } from '../reusable';
import HeadScroll from '../ui/HeadScroll';
import { ListPlaceholder } from '../reusable/ListPlaceholder';
import {
  getDelegation,
  getAllDelegation,
  loggedInChange,
  loadOfflineDeleg,
  loadOfflineReferee,
  filterChanged
} from '../../redux/actions';
import { dividedIntoSections, filterDataForRender } from '../../utils/Utils';

let delegacia = null;

class Zapasy extends Component {
  constructor(props) {
    super(props);
    this.filterData = null;
    this.state = {
      renderData: null,
      scrollListToTop: false
    };
  }

  componentWillReceiveProps(nextProps) {
    const { delegList, refereeList, filterValues } = nextProps;
    if (delegList && this.props.delegList !== delegList) {
      delegacia = dividedIntoSections(delegList);
    }
    if (refereeList && this.props.refereeList !== refereeList) {
      this.filterData = [delegacia[1], delegacia[2], refereeList];
    }
    if (
      delegacia &&
      refereeList &&
      this.filterData &&
      (this.props.delegList !== delegList ||
        this.props.refereeList !== refereeList ||
        this.props.filterValues !== filterValues)
    ) {
      const filteredData = filterDataForRender(delegacia[0].slice(1), filterValues, refereeList);
      this.setState({ renderData: filteredData });
    }
  }

  render() {
    const itemPlaceholder = <MatchItem placeholder="true" />;
    if (this.state.renderData === null || this.props.loggedIn === null) {
      return <ListPlaceholder size={6} view={itemPlaceholder} />;
    }
    return (
      <View style={{ flex: 1, backgroundColor: 'rgb(228, 228, 228)' }}>
        <HeadScroll
          ScrollableComponent={SectionList}
          headerHeight={50}
          filterData={this.filterData}
          keyExtractor={(item, index) => item.cislo}
          renderItem={({ item, key }) => {
            return <MatchItem data={item} key={key} onPress={data => Actions.detail({ data })} />;
          }}
          renderSectionHeader={({ section }) => (
            <SectionHeader title={section.title} number={section.data.length} />
          )}
          sections={this.state.renderData} //slice "Liga"
        />
      </View>
    );
  }
}
const mapStateToProps = ({ data, items, auth }) => {
  const { delegation, delegations, filterValues } = data;
  const { delegList, refereeList } = items;
  const { user, loggedIn } = auth;
  return {
    delegation,
    delegations,
    filterValues,
    delegList,
    refereeList,
    user,
    loggedIn
  };
};

export default connect(mapStateToProps, {
  getDelegation,
  getAllDelegation,
  loggedInChange,
  loadOfflineDeleg,
  loadOfflineReferee,
  filterChanged
})(Zapasy);
