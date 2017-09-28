import React, { Component } from 'react';
import { SectionList } from 'react-native';
import { SectionHeader } from './SectionHeader';

export const ListPlaceholder = ({view, size}) => {
  const data = [];
  const title = ' ';
  for (i = 0; i < size; i++) {
    data.push({key: String(i)});
  }
  const sections = [{ data, title }];
  return (
    <SectionList
      style={{ backgroundColor: 'rgb(228, 228, 228)' }}
      renderItem={(item) => view }
      renderSectionHeader={(section) => <SectionHeader title={' '}/>}
      sections={sections}
    />
  );
}
