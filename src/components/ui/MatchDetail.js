import React from 'react';
import { SectionList } from 'react-native';
import { MatchItem, SectionHeader } from '../reusable';
//import FilterHeader from '../reusable/FilterHeader';
import HeadScroll from './HeadScroll';
//import FilterTabHeader from './FilterTabHeader';

const MatchDetail = ({ data, filterData }) => {
  //const header = <FilterTabHeader headerHeight={150} data={filterData} />;
  
  return (
    <HeadScroll
       ScrollableComponent={SectionList}
       headerHeight={50}
       filterData={filterData}
       renderItem={({ item, key }) => <MatchItem data={item} key={key} />}
       renderSectionHeader={({ section }) => <SectionHeader title={section.title} />}
       sections={data}
    />
  );
};

export default MatchDetail;
