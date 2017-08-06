import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, ScrollView, KeyboardAvoidingView } from 'react-native';
import { loginStyle, profileStyle } from '../styles/styles';
import { Card, Input } from '../reusable';
import { profileUpdate } from '../../actions';

const avatar = require('../../../assets/images/avatar.png');

class Profil extends Component {
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <KeyboardAvoidingView behavior='position'>
        <View style={loginStyle.containerStyle}>
          <Card
            flexDir={'column'}
            styl={{ flex: 1, margin: 10 }}
          >
              <View style={profileStyle.imageContainer}>
                <Image
                  style={profileStyle.image}
                  source={avatar}
                />
              </View>
              <Text style={profileStyle.name}>Martin Jobbagy</Text>
              <Input
                  styleLabel={profileStyle.inputLabel}
                  styleInput={profileStyle.inputText}
                  styleContainer={profileStyle.inputContainer}
                  label={'rozhodca'}
                  onChangeText={text => this.props.profileUpdate({ prop: 'rozhodca', value: text })}
                  placeholder={'Zadajte typ rozhodcu'}
                  editable={this.props.editable}
                  value={this.props.rozhodca}
              />
              <Input
                  styleLabel={profileStyle.inputLabel}
                  styleInput={profileStyle.inputText}
                  styleContainer={profileStyle.inputContainer}
                  label={'liga'}
                  onChangeText={text => this.props.profileUpdate({ prop: 'liga', value: text })}
                  placeholder={'Zadajte max. ligu'}
                  editable={this.props.editable}
                  value={this.props.liga}
              />
              <Input
                  styleLabel={profileStyle.inputLabel}
                  styleInput={profileStyle.inputText}
                  styleContainer={profileStyle.inputContainer}
                  label={'mesto'}
                  onChangeText={text => this.props.profileUpdate({ prop: 'mesto', value: text })}
                  placeholder={'Zadajte svoje mesto/obec '}
                  editable={this.props.editable}
                  value={this.props.mesto}
              />
              <Input
                  styleLabel={profileStyle.inputLabel}
                  styleInput={profileStyle.inputText}
                  styleContainer={profileStyle.inputContainer}
                  label={'auto'}
                  onChangeText={text => this.props.profileUpdate({ prop: 'auto', value: text })}
                  placeholder={'Zadajte ŠPZ vozidla'}
                  editable={this.props.editable}
                  value={this.props.auto}
              />
              <Input
                  styleLabel={profileStyle.inputLabel}
                  styleInput={profileStyle.inputText}
                  styleContainer={[profileStyle.inputContainer, { borderBottomWidth: 0 }]}
                  label={'email'}
                  onChangeText={text => this.props.profileUpdate({ prop: 'email', value: text })}
                  placeholder={'Zadajte svoj email'}
                  editable={this.props.editable}
                  value={this.props.email}
              />
          </Card>
        </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ profile }) => {
  const { editable,
  meno,
  rozhodca,
  liga,
  mesto,
  auto,
  email } = profile;

  return { editable,
    meno,
    rozhodca,
    liga,
    mesto,
    auto,
    email };
};

export default connect(mapStateToProps,
    { profileUpdate })(Profil);
