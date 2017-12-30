import React from 'react';
import { SectionList } from 'react-native';
import { MatchItem, SectionHeader } from '../reusable';
//import FilterHeader from '../reusable/FilterHeader';
import HeadScroll from './HeadScroll';
//import FilterTabHeader from './FilterTabHeader';

const MatchDetail = ({ data, filterData }) => {
    return (
        <HeadScroll
            ScrollableComponent={SectionList}
            headerHeight={50}
            filterData={filterData}
            renderItem={({ item, key }) => (item ? <MatchItem data={item} key={key} /> : null)}
            renderSectionHeader={({ section }) => <SectionHeader title={section.title} />}
            sections={data.slice(1)} //slice "Liga"
        />
    );
};

export default MatchDetail;
