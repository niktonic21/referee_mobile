import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
//import { Card, InputDetial, Divider } from '../../reusable';
import {
  Content,
  Card,
  CardItem,
  Text,
  Icon,
  Right,
  Item,
  Label,
  Input,
  Separator
} from 'native-base';
import { profileUpdate } from '../../../redux/actions';

const CESTOVNE = 'Cestovné';

class DetailCestovne extends PureComponent {
  render() {
    return (
      <View>
        <Text style={{ fontSize: 20 }}>{CESTOVNE}</Text>
        <Card>
          <CardItem>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </CardItem>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = ({ profile }) => {
  const { editable, meno, rozhodca, liga, mesto, auto, email } = profile;

  return {
    editable,
    meno,
    rozhodca,
    liga,
    mesto,
    auto,
    email
  };
};

export default connect(mapStateToProps, { profileUpdate })(DetailCestovne);
