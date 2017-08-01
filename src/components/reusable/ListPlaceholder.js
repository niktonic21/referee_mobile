import React, { Component } from 'react';
import { SectionList } from 'react-native';

const ListPlaceholder = ({item, size}) => {
  const array = 
  return (
    <SectionList
      renderItem={({item}) => {item} /> }
      renderSectionHeader={({section}) => <SectionHeader title={''}/>}
      sections={}
    />
  ;)
}
