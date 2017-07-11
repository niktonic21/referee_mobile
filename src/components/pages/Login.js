import React, { Component } from 'react';
import { View,Text } from 'react-native';
//import firabase from 'firabase';
import { Card, CardSection } from '../reusable';
import { loginStyle } from '../styles/styles'
import LoginForm from '../ui/LoginForm'

class Login extends Component {
  // componentWillMount(){
  //   firabase.initilizeApp({
  //     apiKey: "AIzaSyDYFLQYIcPzj1j-J6hO87hPAOoyKb5TTH4",
  //     authDomain: "referee-60959.firebaseapp.com",
  //     databaseURL: "https://referee-60959.firebaseio.com",
  //     projectId: "referee-60959",
  //     storageBucket: "referee-60959.appspot.com",
  //     messagingSenderId: "881564158476"
  //   });
  // }

  render() {
    return (
      <View style={loginStyle.containerStyle}>
          <LoginForm/>
      </View>
    );
  }

}

export default Login;
