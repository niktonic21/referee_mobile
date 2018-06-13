import React, { Component } from 'react';
//import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Content, List, ListItem, Text, Body, Right } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

export default class Settings extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem onPress={() => Actions.login()}>
              <Body>
                <Text>Prihlásenie</Text>
              </Body>
              <Right>
                <Ionicons size={32} name="ios-arrow-forward" />
              </Right>
            </ListItem>
            <ListItem onPress={() => Actions.profil()}>
              <Body>
                <Text>Profil</Text>
              </Body>
              <Right>
                <Ionicons size={32} name="ios-arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

// const mapStateToProps = ({ profile }) => {
//   const { editable, meno, rozhodca, liga, mesto, auto, email } = profile;

//   return {
//     editable,
//     meno,
//     rozhodca,
//     liga,
//     mesto,
//     auto,
//     email
//   };
// };

//export default Settings;
