import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux'


export default class SideDrawerContent extends Component {
    render() {
        return (
          <View style={styles.container}>
            <View style={styles.menu}>
              <Text style={styles.title}>Hlavné Menu</Text>

              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={()=>{Actions.login();this._drawer.close()}}
              >
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonContainer}
                onPress= {()=>{Actions.zapasy();this._drawer.close()}}
              >
                <Text style={styles.buttonText}>Zapasy</Text>
              </TouchableOpacity>

            </View>
          </View>
        )
    }
}

    const styles = {
     menu: {
         flex: 1,
     	 flexDirection:'column'
     },

     container:{
        flex:1,
        flexDirection:'row'
     },

    buttonText: {
    	textAlign: 'left',
      color:'black',
    	color:'rgba(252,252,252,1)',
    	fontSize: 15,
    	paddingLeft:10
     },
     buttonContainer:{
      height: 45,
     	justifyContent: 'center',
      backgroundColor: 'grey'
    },

    title:{
      textAlign: 'left',
    	color:'grey',
    	fontSize: 17,
    	paddingLeft:10,
    	paddingTop:20
    },
}
