import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Card } from './Card';
import { CardItem } from './CardItem';
import { Divider } from './Divider';
import { createRefereeName, parseDate, numberToMonth } from '../../utils/Utils';
import { listStyle } from '../styles/styles';

class MatchItemSimple extends PureComponent {
    render() {
        const { data, placeholder, key, onPress } = this.props;
        if (!placeholder) {
            const { cas, datum, den, domaci, hostia, liga, cislo } = data;
            const { day, month } = parseDate(datum);
            return (
                <TouchableOpacity activeOpacity={0.5} onPress={() => onPress(data)}>
                    <View>
                        <Card flexDir={'row'} aligning={'center'} key={key}>
                            <CardItem style={{ flex: 3 }}>
                                <Text style={{ margin: 5, fontSize: 16 }}>
                                    {den} {day}. {numberToMonth(parseInt(month, 10))} o {cas}
                                </Text>
                                <Text style={{ margin: 5, fontSize: 14 }}>
                                    {cislo} - {liga}
                                </Text>
                                <Text style={{ margin: 5, fontSize: 14 }}>
                                    {domaci} - {hostia}
                                </Text>
                            </CardItem>
                            <Divider orientation={'vertical'} length={90} color={'black'} />
                            <CardItem style={{ flex: 1 }}>
                                <Text style={{ margin: 5 }}>PDF_ICO</Text>
                            </CardItem>
                        </Card>
                    </View>
                </TouchableOpacity>
            );
        }
        return (
            <Card>
                <View style={{ height: 91 }} />
            </Card>
        );
    }
}
export { MatchItemSimple };
