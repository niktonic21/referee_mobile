import React, { Component } from 'react';
import { View,Text } from 'react-native';
//import firabase from 'firabase';
import { Card, CardItem,Button } from '../reusable';


class LoginForm extends Component {
  render() {
    return (
      <Card flexDir={'column'} >
          <CardItem >
            <Button>
                Aasdasd
            </Button>
          </CardItem>

          <CardItem >
            <Button>
                Basdasdas
            </Button>
          </CardItem>

          <CardItem >
            <Button>
                Prihlásenie
            </Button>
          </CardItem>
      </Card>
    );
  }

}

export default LoginForm;
