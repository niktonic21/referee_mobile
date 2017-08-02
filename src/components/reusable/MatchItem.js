import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card } from './Card';
import { CardItem } from './CardItem';
import { Divider } from './Divider';

const createRefereeName = (referee) => {
  return typeof(referee) === 'object' ? referee.meno.substring(0,1) + '. ' + referee.priezvisko : '-'
}

const MatchItem = ({data, placeholder}) => {
  const {cas, ciarovy1, ciarovy2, hlavny1, hlavny2, instruktor, datum, den, domaci, hostia, stadion} = data;
  const emptyList =
  <Card
    flexDir={'row'}
    aligning={'center'}
  >
    <View style={{height: 86}}/>
  </Card>;
  const fullList =
    <Card
      flexDir={'row'}
      aligning={'center'}
    >
        <CardItem>
          <Text style={{margin: 5}}>{domaci} - {hostia}</Text>
          <Text style={{margin: 5}}>{stadion}</Text>
          <Text style={{margin: 5}}>{datum} o {cas}</Text>
        </CardItem>
        <Divider orientation={'vertical'} length={70} color={'black'}/>
        <CardItem>
          <Text style={styles.font}>{createRefereeName(ciarovy1)}</Text>
          <Text style={styles.font}>{createRefereeName(ciarovy2)}</Text>
          <Text style={styles.font}>{createRefereeName(hlavny1)}</Text>
          <Text style={styles.font}>{createRefereeName(hlavny2)}</Text>
          <Text style={styles.font}>{createRefereeName(instruktor)}</Text>
        </CardItem>
    </Card>;
  return (placeholder ? emptyList : fullList);
};

const styles = {
  font: {
    fontSize: 10
  }
};

export { MatchItem };
