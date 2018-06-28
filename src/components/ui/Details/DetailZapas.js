import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { View, Dimensions } from 'react-native';
import { Card, CardItem, Text, Icon, Right, Item, Label, Input } from 'native-base';
import { profileUpdate } from '../../../redux/actions';
import { createRefereeName, parseDate } from '../../../utils/Utils';

const width = Dimensions.get('window').width;
const ZAPAS = 'Zápas';

class DetailDefault extends PureComponent {
  render() {
    const {
      liga,
      cas,
      kolo,
      cislo,
      rozhodca1,
      rozhodca2,
      rozhodca3,
      rozhodca4,
      rozhodca5,
      rozhodca6,
      datum,
      den,
      domaci,
      hostia,
      stadion
    } = this.props.data;
    const { day, month, year } = parseDate(datum);

    return (
      <View>
        <Text style={{ fontSize: 20 }}>{ZAPAS}</Text>
        <Card style={{ borderRadius: 10 }}>
          <CardItem first style={{ borderRadius: 10 }}>
            <Item floatingLabel>
              <Label>Súťaž</Label>
              <Input value={liga} />
            </Item>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </CardItem>
          <CardItem>
            <Item floatingLabel>
              <Label>Č. zápasu a kolo</Label>
              <Input value={`č.z. ${cislo} a ${kolo}`} />
            </Item>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </CardItem>

          <CardItem>
            <Item floatingLabel>
              <Label>Dátum a čas</Label>
              <Input value={`${den} ${datum} o ${cas}`} />
            </Item>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </CardItem>
          <CardItem>
            <Item floatingLabel>
              <Label>Štadión</Label>
              <Input value={stadion} />
            </Item>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </CardItem>
          <CardItem last style={{ borderRadius: 10 }}>
            <Item bordered={false} floatingLabel>
              <Label>Rozhodcovia</Label>
              <Input
                value={`${createRefereeName(rozhodca1)}, ${createRefereeName(
                  rozhodca2
                )},\n${createRefereeName(rozhodca3)}, ${createRefereeName(
                  rozhodca4
                )},\n${createRefereeName(rozhodca5)}, ${createRefereeName(rozhodca6)}`}
              />
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

export default connect(mapStateToProps, { profileUpdate })(DetailDefault);
