import React from 'react';
import { View, Text } from 'react-native';
import { Card } from './Card';
import { CardItem } from './CardItem';
import { Divider } from './Divider';
import { createRefereeName, parseDate, numberToMonth } from '../../utils/Utils';
import { listStyle } from '../styles/styles';
const MatchItem = ({ data, placeholder, key }) => {
  if (!placeholder) {
    const {
      cas,
      ciarovy1,
      ciarovy2,
      hlavny1,
      hlavny2,
      instruktor,
      datum,
      den,
      domaci,
      hostia,
      stadion
    } = data;
    const { day, month } = parseDate(datum);
      return (
      <Card
        flexDir={'row'}
        aligning={'center'}
        key={key}
      >
          <CardItem style={{ flex: 3 }}>
            <Text style={{ margin: 5 }}>{domaci} - {hostia}</Text>
            <Text style={{ margin: 5 }}>{stadion}</Text>
            <Text style={{ margin: 5 }}>{den} {day}. {numberToMonth(parseInt(10, month))} o {cas}</Text>
          </CardItem>
          <Divider orientation={'vertical'} length={90} color={'black'} />
          <CardItem style={{ flex: 2, alignItems: 'flex-start' }}>
          <Text style={listStyle.font}>{createRefereeName(hlavny1)}</Text>
          <Text style={listStyle.font}>    {createRefereeName(hlavny2)}</Text>
            <Text style={listStyle.font}>{createRefereeName(ciarovy1)}</Text>
            <Text style={listStyle.font}>    {createRefereeName(ciarovy2)}</Text>
            <Text style={listStyle.font}>{createRefereeName(instruktor)}</Text>
          </CardItem>
      </Card>
    );
  } else {
    return (
      <Card>
        <View style={{ height: 91 }} />
      </Card>
    );
  }
};

export { MatchItem };
