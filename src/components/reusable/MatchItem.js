import React from 'react';
import { View, Text } from 'react-native';
import { Card } from './Card';
import { CardItem } from './CardItem';
import { Divider } from './Divider';
import { createRefereeName, parseDate, numberToMonth } from '../../utils/Utils';

const MatchItem = ({ data, placeholder }) => {
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
      >
          <CardItem style={{ flex: 3 }}>
            <Text style={{ margin: 5 }}>{domaci} - {hostia}</Text>
            <Text style={{ margin: 5 }}>{stadion}</Text>
            <Text style={{ margin: 5 }}>{den} {day}. {numberToMonth(parseInt(10, month))} o {cas}</Text>
          </CardItem>
          <Divider orientation={'vertical'} length={90} color={'black'} />
          <CardItem style={{ flex: 2, alignItems: 'flex-start' }}>
            <Text style={styles.font}>{createRefereeName(ciarovy1)}</Text>
            <Text style={styles.font}>    {createRefereeName(ciarovy2)}</Text>
            <Text style={styles.font}>{createRefereeName(hlavny1)}</Text>
            <Text style={styles.font}>    {createRefereeName(hlavny2)}</Text>
            <Text style={styles.font}>{createRefereeName(instruktor)}</Text>
          </CardItem>
      </Card>
    );
  } else {
    return (
      <Card
        flexDir={'row'}
        aligning={'center'}
      >
        <View style={{ height: 91 }} />
      </Card>
    );
  }
};

const styles = {
  font: {
    fontSize: 10,
    lineHeight: 18
  }
};

export { MatchItem };
