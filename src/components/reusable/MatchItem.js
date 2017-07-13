import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import Divider from './Divider';

const MatchItem = () => {
  return(
    <Card flexDirection={'row'} >
      <CardItem>
        <Text style={{margin: 5}}>SN - LM</Text>
        <Text style={{margin: 5}}>STEEL ARENA KE</Text>
        <Text style={{margin: 5}}>PIATOK O PIATEJ</Text>
      </CardItem>
      <Divider orientation={'vertical'} length={70} color={'black'}/>
      <CardItem>
        <Text style={styles.font}>Rozhodca1</Text>
        <Text style={styles.font}>Rozhodca1</Text>
        <Text style={styles.font}>Rozhodca2</Text>
        <Text style={styles.font}>Rozhodca2</Text>
        <Text style={styles.font}>Rozhodca3</Text>
        <Text style={styles.font}>Rozhodca3</Text>
      </CardItem>
    </Card>
  );
};

const styles = {
  font: {
    fontSize: 10
  }
};

export default { MatchItem };
