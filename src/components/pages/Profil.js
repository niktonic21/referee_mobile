import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, ScrollView, KeyboardAvoidingView } from 'react-native';
import { loginStyle, profileStyle } from '../styles/styles';
import { Card, Input } from '../reusable';
import { profileUpdate } from '../../redux/actions';

const avatar = require('../../../assets/images/avatar.png');

class Profil extends PureComponent {
  render() {
    const { editable, meno, priezvisko, rozhodca, liga, mesto, auto, email } = this.props.profile;
    return (
      <ScrollView style={{ flex: 1 }}>
        <KeyboardAvoidingView behavior="position">
          <Card flexDir={'column'} styl={{ flex: 1, marginTop: 20 }}>
            <View style={profileStyle.imageContainer}>
              <Image style={profileStyle.image} source={avatar} />
            </View>
            <Text style={profileStyle.name}>
              {meno} {priezvisko}
            </Text>
            <Input
              styleLabel={profileStyle.inputLabel}
              styleInput={profileStyle.inputText}
              styleContainer={profileStyle.inputContainer}
              label={'rozhodca'}
              onChangeText={text => this.props.profileUpdate({ prop: 'rozhodca', value: text })}
              placeholder={'Zadajte typ rozhodcu'}
              editable={editable || false}
              value={rozhodca}
            />
            <Input
              styleLabel={profileStyle.inputLabel}
              styleInput={profileStyle.inputText}
              styleContainer={profileStyle.inputContainer}
              label={'liga'}
              onChangeText={text => this.props.profileUpdate({ prop: 'liga', value: text })}
              placeholder={'Zadajte max. ligu'}
              editable={editable || false}
              value={liga}
            />
            <Input
              styleLabel={profileStyle.inputLabel}
              styleInput={profileStyle.inputText}
              styleContainer={profileStyle.inputContainer}
              label={'mesto'}
              onChangeText={text => this.props.profileUpdate({ prop: 'mesto', value: text })}
              placeholder={'Zadajte svoje mesto/obec '}
              editable={editable || false}
              value={mesto}
            />
            <Input
              styleLabel={profileStyle.inputLabel}
              styleInput={profileStyle.inputText}
              styleContainer={profileStyle.inputContainer}
              label={'auto'}
              onChangeText={text => this.props.profileUpdate({ prop: 'auto', value: text })}
              placeholder={'Zadajte ŠPZ vozidla'}
              editable={editable || false}
              value={auto}
            />
            <Input
              styleLabel={profileStyle.inputLabel}
              styleInput={profileStyle.inputText}
              styleContainer={[profileStyle.inputContainer, { borderBottomWidth: 0 }]}
              label={'email'}
              onChangeText={text => this.props.profileUpdate({ prop: 'email', value: text })}
              placeholder={'Zadajte svoj email'}
              editable={editable || false}
              value={email}
            />
          </Card>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ profile }) => {
  return { profile };
};

export default connect(mapStateToProps, { profileUpdate })(Profil);
