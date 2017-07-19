
import React, { Component } from 'react';
import { View,Text } from 'react-native';
import MatchDetail from '../ui/MatchDetail';

class Zapasy extends Component {

  render() {
    return (
      <View style={{flex: 1,paddingTop: 64}}>
        <MatchDetail data={[
          {data: ['zapas1','zapas2','zapas3'], title: 'Zapas1'}
        ]}/>
      </View>
    );
  }

}

export default Zapasy;


// [
//   {data: [{key: 'zapas1'},{key: 'zapas2'},{key: 'zapas3'}], title: 'Zapas1'},
//   {data: [{key: 'zapas1'},{key: 'zapas2'},{key: 'zapas3'}], title: 'Zapas2'},
//   {data: [{key: 'zapas1'},{key: 'zapas2'},{key: 'zapas3'}], title: 'Zapas3'},
// ]
