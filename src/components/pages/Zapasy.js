
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MatchDetail from '../ui/MatchDetail';

class Zapasy extends Component {

  render() {
    return (
      <View style={{flex: 1}}>
        <MatchDetail data={[
          {data: [{key: 'zapas1'},{key: 'zapas2'},{key: 'zapas3'}], title: 'Zapas1'}
        ]}/>
      </View>
    );
  }

}

export default Zapasy;
