import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { View, Text, Dimensions, ScrollView } from 'react-native';
import { loginStyle, profileStyle } from '../styles/styles';
import { Card, InputDetial, Divider } from '../reusable';
import { profileUpdate } from '../../redux/actions';
import { createRefereeName, parseDate } from '../../utils/Utils';

const width = Dimensions.get('window').width;

class MatchDetail extends PureComponent {
    render() {
        console.log('Data', this.props.data);
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
            <ScrollView style={{ flex: 1 }}>
                <View style={{ flex: 1, paddingVertical: 15 }}>
                    <Text style={{ marginLeft: 15, fontSize: 20 }}> Zápas </Text>
                    <Card flexDir={'column'} styl={{ flex: 1, margin: 10 }}>
                        <InputDetial
                            label={'Súťaž'}
                            placeholder={'Liga'}
                            value={liga}
                            //onChangeText={text => liga}
                        />
                        <Divider orientation={'horizontal'} length={width - 40} color={'grey'} />

                        <InputDetial
                            label={'Č. zápasu a kolo'}
                            placeholder={'Č. zápasu a kolo'}
                            value={`č.z. ${cislo} a ${kolo}`}
                            //onChangeText={text => }
                        />
                        <Divider orientation={'horizontal'} length={width - 40} color={'grey'} />
                        <InputDetial
                            label={'Dátum a čas'}
                            placeholder={'Dátum a čas'}
                            value={`${den} ${datum} o ${cas}`}
                            //onChangeText={text => }
                        />
                        <Divider orientation={'horizontal'} length={width - 40} color={'grey'} />
                        <InputDetial
                            label={'Štadión'}
                            placeholder={'Štadión'}
                            value={stadion}
                            //onChangeText={text => }
                        />
                        <Divider orientation={'horizontal'} length={width - 40} color={'grey'} />
                        <InputDetial
                            label={'Domáci - Hostia'}
                            placeholder={'Domáci - Hostia'}
                            value={`${domaci} - ${hostia}`}
                            //onChangeText={text => }
                        />
                        <Divider orientation={'horizontal'} length={width - 40} color={'grey'} />
                        <InputDetial
                            label={'Rozhodcovia'}
                            placeholder={''}
                            value={`${createRefereeName(rozhodca1)}, ${createRefereeName(
                                rozhodca2
                            )},\n${createRefereeName(rozhodca3)}, ${createRefereeName(
                                rozhodca4
                            )},\n${createRefereeName(rozhodca5)}, ${createRefereeName(rozhodca6)}`}
                            //onChangeText={text => }
                        />
                    </Card>
                </View>
            </ScrollView>
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

export default connect(mapStateToProps, { profileUpdate })(MatchDetail);
