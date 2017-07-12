import React, { Component } from 'react';
import { View, Text } from 'react-native';
//import firabase from 'firabase';
import { Card, CardItem, Button, Input, Divider } from '../reusable';


class LoginForm extends Component {
  state = { email: '', heslo: '' };
  render() {
    return (
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
              value={this.state.heslo}
              onChangeText={heslo => this.setState({ heslo })}
            />
          </CardItem>
          <Divider orientation={'horizontal'} length={300} color={'black'} />
          <CardItem styl={{ margin: 10 }}>
            <Button style={{ width: 200 }}>
                Prihlásenie
            </Button>
          </CardItem>
      </Card>
    );
  }

}

export default LoginForm;
