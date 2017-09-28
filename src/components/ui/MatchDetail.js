import React from 'react';
import { SectionList } from 'react-native';
import { MatchItem, SectionHeader } from '../reusable';
import FilterHeader from '../reusable/FilterHeader';
import HeadScroll from './HeadScroll';

const MatchDetail = ({ data, filterData }) => {
  // <SectionList
  //   renderItem={({ item }) => <MatchItem data={item} />}
  //   renderSectionHeader={({ section }) => <SectionHeader title={section.title} />}
  //   sections={data}
  // />
  const header = <FilterHeader data={filterData} />;

  return (
    <HeadScroll
       headerComponent={header}
       ScrollableComponent={SectionList}
       headerHeight={-340}
       renderItem={({ item }) => <MatchItem data={item} />}
       renderSectionHeader={({ section }) => <SectionHeader title={section.title} />}
       sections={data}
    />
  );
};

export default MatchDetail;
