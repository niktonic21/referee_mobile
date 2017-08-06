import React from 'react';
import { SectionList } from 'react-native';
import { MatchItem, SectionHeader } from '../reusable';

const MatchDetail = ({ data }) => {
  return (
    <SectionList
      renderItem={({ item }) => <MatchItem data={item} />}
      renderSectionHeader={({ section }) => <SectionHeader title={section.title} />}
      sections={data}
    />
  );
};

export default MatchDetail;
