import React, { Component } from 'react';
import { View, Text, Image, ScrollView, KeyboardAvoidingView } from 'react-native';
import { loginStyle, profileStyle } from '../styles/styles';
import { Card, Button, Input } from '../reusable';

class Profil extends Component {
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <KeyboardAvoidingView behavior='position'>
        <View style={loginStyle.containerStyle}>
          <Card flexDir={'column'} styl={{ flex: 1, margin: 10 }}>
              <View style={profileStyle.imageContainer}>
                <Image
                  style={profileStyle.image}
                  source={require('../../../assets/images/avatar.png')}
                />
              </View>
              <Text style={profileStyle.name}>Martin Jobbagy</Text>
              <Input
                  styleLabel={profileStyle.inputLabel}
                  styleInput={profileStyle.inputText}
                  styleContainer={profileStyle.inputContainer}
                  label={'rozhodca'}
                  placeholder={'Zadajte typ rozhodcu'}
                  editable={this.props.editable}
                  value={this.props.password}
              />
              <Input
                  styleLabel={profileStyle.inputLabel}
                  styleInput={profileStyle.inputText}
                  styleContainer={profileStyle.inputContainer}
                  label={'liga'}
                  placeholder={'Zadajte typ rozhodcu'}
                  editable={this.props.editable}
                  value={this.props.password}
              />
              <Input
                  styleLabel={profileStyle.inputLabel}
                  styleInput={profileStyle.inputText}
                  styleContainer={profileStyle.inputContainer}
                  label={'mesto'}
                  placeholder={'Zadajte svoje mesto/obec '}
                  editable={this.props.editable}
                  value={this.props.password}
              />
              <Input
                  styleLabel={profileStyle.inputLabel}
                  styleInput={profileStyle.inputText}
                  styleContainer={profileStyle.inputContainer}
                  label={'auto'}
                  placeholder={'Zadajte ŠPZ vozidla'}
                  editable={this.props.editable}
                  value={this.props.password}
              />
              <Input
                  styleLabel={profileStyle.inputLabel}
                  styleInput={profileStyle.inputText}
                  styleContainer={[profileStyle.inputContainer, { borderBottomWidth: 0 }]}
                  label={'email'}
                  placeholder={'Zadajte svoj email'}
                  editable={this.props.editable}
                  value={this.props.password}
              />
          </Card>
          <Card styl={{ flex: 1, margin: 10 }}>
            <Button
              styl={{ width: 200, height: 30 }}
            >
                Odhlásiť sa
            </Button>
          </Card>
        </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

export default Profil;
