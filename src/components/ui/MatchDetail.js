import React, { Component } from 'react';
import { View, Text, SectionList } from 'react-native';
import { MatchItem, SectionHeader } from '../reusable';

const MatchDetail = (props) => {
  return(
    <SectionList
      renderItem={({item}) => <MatchItem/> }
      renderSectionHeader={({section}) => <SectionHeader title={section.title}/>}
      sections={props.data}
    />
  );
};

export default MatchDetail;
