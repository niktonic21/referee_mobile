import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, SectionList, StyleSheet, Dimensions } from 'react-native';
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
        const { offlineDelegList, offlineRefereeList, user } = nextProps;
        if (offlineDelegList !== this.props.offlineRefereeList) {
            const matchesIdsOfUser = findRozhodcaMatches(user.uid, offlineRefereeList);
            matchesOfUser = dividedIntoMonthSections(offlineDelegList, matchesIdsOfUser);
            this.setState({ renderData: matchesOfUser });
        }
    }

    render() {
        const itemPlaceholder = <MatchItem placeholder="true" />;
        if (this.state.renderData === null) {
            return <ListPlaceholder size={6} view={itemPlaceholder} />;
        }
        return (
            <SectionList
                ref="_sectionList"
                style={{ flex: 1, backgroundColor: 'rgb(228, 228, 228)' }}
                automaticallyAdjustContentInsets
                contentInsetAdjustmentBehavior={'automatic'}
                keyExtractor={(item, index) => item.cislo}
                sections={this.state.renderData} //slice "Liga"
                renderSectionHeader={({ section }) => <SectionHeader title={section.title} />}
                renderItem={({ item, key }) => {
                    return (
                        <MatchItemSimple
                            data={item}
                            key={key}
                            onPress={data => Actions.detail({ data })}
                        />
                    );
                }}
            />
        );
    }
}

const mapStateToProps = ({ items, auth }) => {
    const { offlineDelegList, offlineRefereeList } = items;
    const { user, loggedIn } = auth;
    return {
        offlineDelegList,
        offlineRefereeList,
        user,
        loggedIn
    };
};

export default connect(mapStateToProps, {
    loggedInChange
})(MojeZapasyList);
