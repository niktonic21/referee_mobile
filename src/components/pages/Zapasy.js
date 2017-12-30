import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { View, SectionList } from 'react-native';
import { MatchItem, SectionHeader } from '../reusable';
import HeadScroll from '../ui/HeadScroll';
import { ListPlaceholder } from '../reusable/ListPlaceholder';
import {
    getDelegation,
    getAllDelegation,
    loggedInChange,
    profileFetchData,
    loadOfflineDeleg,
    loadOfflineReferee
} from '../../redux/actions';
import { dividedIntoSections, filterDataForRender } from '../../utils/Utils';

let delegacia = null;
class Zapasy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderData: null
        };
    }

    componentWillMount() {
        this.props.loadOfflineDeleg();
        this.props.loadOfflineReferee();
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.loggedInChange(user, (this.props.loggedIn = true));
                this.props.profileFetchData();
            } else {
                this.props.loggedInChange(user, (this.props.loggedIn = false));
            }
        });
    }

    componentWillReceiveProps(nextProps) {
        const { offlineDelegList, offlineRefereeList, filterValues } = nextProps;
        if (offlineDelegList && this.props.offlineDelegList !== offlineDelegList) {
            delegacia = dividedIntoSections(offlineDelegList);
        }
        if (offlineRefereeList && this.props.offlineRefereeList !== offlineRefereeList) {
            this.delegacia = delegacia[0].slice(1); //default data
            this.setState({ renderData: this.delegacia });
            this.filterData = [delegacia[1], delegacia[2], offlineRefereeList]; //default data for filter
        }
        if (this.props.filterValues !== filterValues) {
            const filteredData = filterDataForRender(
                this.delegacia,
                filterValues,
                offlineRefereeList
            );
            this.setState({ renderData: filteredData });
            console.log('filter', nextProps.filterValues, filteredData);
        }
    }

    render() {
        const itemPlaceholder = <MatchItem placeholder="true" />;
        const matches =
            this.state.renderData === null ? (
                <ListPlaceholder size={6} view={itemPlaceholder} />
            ) : (
                <View style={{ flex: 1, backgroundColor: 'rgb(228, 228, 228)' }}>
                    <HeadScroll
                        ScrollableComponent={SectionList}
                        headerHeight={50}
                        filterData={this.filterData}
                        renderItem={({ item, key }) => {
                            return <MatchItem data={item} key={key} />;
                        }}
                        renderSectionHeader={({ section }) => (
                            <SectionHeader title={section.title} />
                        )}
                        sections={this.state.renderData} //slice "Liga"
                    />
                </View>
            );
        return matches;
    }
}
const mapStateToProps = ({ data, items }) => {
    const { delegation, delegations, filterValues } = data;
    const { offlineDelegList, offlineRefereeList } = items;
    return { delegation, delegations, filterValues, offlineDelegList, offlineRefereeList };
};

export default connect(mapStateToProps, {
    getDelegation,
    getAllDelegation,
    loggedInChange,
    profileFetchData,
    loadOfflineDeleg,
    loadOfflineReferee
})(Zapasy);
