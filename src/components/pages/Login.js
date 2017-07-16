import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { loginStyle } from '../styles/styles';
import LoginForm from '../ui/LoginForm';
import { CardItem, Button, Spinner } from '../reusable';

class Login extends Component {

  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDYFLQYIcPzj1j-J6hO87hPAOoyKb5TTH4',
      authDomain: 'referee-60959.firebaseapp.com',
      databaseURL: 'https://referee-60959.firebaseio.com',
      projectId: 'referee-60959',
      storageBucket: 'referee-60959.appspot.com',
      messagingSenderId: '881564158476'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardItem styl={{ margin: 10 }}>
            <Button
              onPress={() => firebase.auth().signOut()}
              styl={{ width: 200, height: 30 }}
            >
                Odhlásiť sa
            </Button>
          </CardItem>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner />;
    }
  }

  render() {
    return (
      <View style={loginStyle.containerStyle}>
          {this.renderContent()}
      </View>
    );
  }

}

export default Login;
