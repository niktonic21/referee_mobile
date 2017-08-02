import React, { Component } from 'react';
import { View, Text, SectionList } from 'react-native';
import { MatchItem, SectionHeader } from '../reusable';

const MatchDetail = ({placeholder, data}) => {
  return(
    <SectionList
      renderItem={({item}) => <MatchItem data={item} /> }
      renderSectionHeader={({section}) => <SectionHeader title={section.title}/>}
      sections={data}
    />
  );
};

export default MatchDetail;
