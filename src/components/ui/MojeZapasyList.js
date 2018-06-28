import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, SectionList, StyleSheet, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { MatchItemSimple, MatchItem, SectionHeader, ListPlaceholder } from '../reusable';
import { loggedInChange } from '../../redux/actions';
import { dividedIntoMonthSections, findRozhodcaMatches } from '../../utils/Utils';

let matchesOfUser = null;

class MojeZapasyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderData: null,
      scrollListToTop: false
    };
  }
  componentWillReceiveProps(nextProps) {
    const { delegList, refereeList, user, loggedIn } = nextProps;
    if (user && loggedIn && delegList !== this.props.refereeList) {
      const matchesIdsOfUser = findRozhodcaMatches(user.uid, refereeList);
      matchesOfUser = dividedIntoMonthSections(delegList, matchesIdsOfUser);
      this.setState({ renderData: matchesOfUser });
    }
  }

  render() {
    const itemPlaceholder = <MatchItem placeholder="true" />;
    if (this.props.loggedIn === null || !this.props.loggedIn) {
      return (
        <View style={{ flex: 1 }}>
          <Text style={styles.noDataText}> Prihlas sa najprv.</Text>
        </View>
      );
    }
    if (this.state.renderData === null) {
      return <ListPlaceholder size={6} view={itemPlaceholder} />;
    }
    return (
      <SectionList
        ref="_sectionList"
        style={styles.container}
        automaticallyAdjustContentInsets
        contentInsetAdjustmentBehavior={'automatic'}
        keyExtractor={(item, index) => item.cislo}
        sections={this.state.renderData} //slice "Liga"
        renderSectionHeader={({ section }) => (
          <SectionHeader title={section.title} number={section.data.length} />
        )}
        renderItem={({ item, key }) => {
          return (
            <MatchItemSimple data={item} key={key} onPress={data => Actions.detail({ data })} />
          );
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(228, 228, 228)'
  },
  noDataText: {
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: 100
  }
});

const mapStateToProps = ({ items, auth }) => {
  const { delegList, refereeList } = items;
  const { user, loggedIn } = auth;
  return {
    delegList,
    refereeList,
    user,
    loggedIn
  };
};

export default connect(mapStateToProps, {
  loggedInChange
})(MojeZapasyList);
