import React, { Component } from 'react';
import { View, Text, SectionList } from 'react-native';
import SectionHeader from '../reusable/SectionHeader';
import MatchItem from '../reusable/MatchItem';

const MatchDetail = (props) => {
  console.log(JSON.stringify(props.data));
  return(
    <SectionList
      renderItem={({item}) => <MatchItem/> }
      renderSectionHeader={({section}) => <SectionHeader title={section.title}/>}
      sections={props.data}
    />
  );
};

export default MatchDetail;
