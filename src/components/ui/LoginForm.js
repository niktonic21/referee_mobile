import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardItem, Button, Input, Divider, Spinner } from '../reusable';


class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: 'false' };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSucces.bind(this))
      .catch(() => {
        console.log('FAILeriks');
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSucces.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginFail() {
    console.log('FAIL');
    this.setState({
      loading: false,
      error: 'Prihlásenie neúspešne.'
    });
  }

  onLoginSucces() {
    console.log('SUC');
    this.setState({
       error: '',
       loading: false,
       email: '',
       password: '',
      });
  }

  renderButton() {
    if (this.state.loading === true) {
      return <Spinner size='small' />;
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)} style={{ width: 200 }}>
          Prihlásenie
      </Button>
    );
  }


  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 10,
          marginRight: 10
        }}
      >
      <View
        style={{
          marginBottom: 90
        }}
      >
        <Text> Tu by som dal iconu </Text>
      </View>
        <Card flexDir={'column'} >
            <CardItem >
              <Input
                placeholder={'meno@email.sk'}
                label={'Email'}
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
              />
            </CardItem>
            <Divider orientation={'horizontal'} length={300} color={'black'} />
            <CardItem >
              <Input
                secureTextEntry
                placeholder={'heslo'}
                label={'Heslo'}
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
              />
            </CardItem>
            <Divider orientation={'horizontal'} length={300} color={'black'} />
            <Text style={{ fontSize: 20, alignSelf: 'center', color: 'red' }}>
              {this.state.error}
            </Text>
            <CardItem styl={{ margin: 10 }}>
              {this.renderButton()}
            </CardItem>
          </Card>
        </View>
    );
  }

}

export default LoginForm;
