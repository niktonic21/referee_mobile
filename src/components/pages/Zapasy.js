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
    profileFetchData,
    loadOfflineDeleg,
    loadOfflineReferee,
    filterChanged
} from '../../redux/actions';
import { dividedIntoSections, filterDataForRender } from '../../utils/Utils';

let delegacia = null;
class Zapasy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderData: null,
            scrollListToTop: false
        };
    }

    componentWillMount() {
        this.props.loadOfflineDeleg();
        this.props.loadOfflineReferee();
    }

    componentWillReceiveProps(nextProps) {
        const { offlineDelegList, offlineRefereeList, filterValues } = nextProps;
        if (offlineDelegList && this.props.offlineDelegList !== offlineDelegList) {
            delegacia = dividedIntoSections(offlineDelegList);
        }
        if (offlineRefereeList && this.props.offlineRefereeList !== offlineRefereeList) {
            this.filterData = [delegacia[1], delegacia[2], offlineRefereeList];
        }
        if (this.props.filterValues !== filterValues) {
            const filteredData = filterDataForRender(
                delegacia[0].slice(1),
                filterValues,
                offlineRefereeList
            );
            this.setState({ renderData: filteredData });
            //console.log('filter', nextProps.filterValues, filteredData);
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
                        return (
                            <MatchItem
                                data={item}
                                key={key}
                                onPress={data => Actions.detail({ data })}
                            />
                        );
                    }}
                    renderSectionHeader={({ section }) => <SectionHeader title={section.title} />}
                    sections={this.state.renderData} //slice "Liga"
                />
            </View>
        );
    }
}
const mapStateToProps = ({ data, items, auth }) => {
    const { delegation, delegations, filterValues } = data;
    const { offlineDelegList, offlineRefereeList } = items;
    const { user, loggedIn } = auth;
    return {
        delegation,
        delegations,
        filterValues,
        offlineDelegList,
        offlineRefereeList,
        user,
        loggedIn
    };
};

export default connect(mapStateToProps, {
    getDelegation,
    getAllDelegation,
    loggedInChange,
    profileFetchData,
    loadOfflineDeleg,
    loadOfflineReferee,
    filterChanged
})(Zapasy);
