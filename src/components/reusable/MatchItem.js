import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Card } from './Card';
import { CardItem } from './CardItem';
import { Divider } from './Divider';
import { createRefereeName, parseDate, numberToMonth } from '../../utils/Utils';
import { listStyle } from '../styles/styles';

class MatchItem extends PureComponent {
    render() {
        const { data, placeholder, key, onPress } = this.props;
        if (!placeholder) {
            const {
                cas,
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
            } = data;
            const { day, month } = parseDate(datum);
            return (
                <TouchableOpacity activeOpacity={0.5} onPress={() => onPress(data)}>
                    <View>
                        <Card flexDir={'row'} aligning={'center'} key={key}>
                            <CardItem style={{ flex: 3 }}>
                                <Text style={{ margin: 5 }}>
                                    {domaci} - {hostia}
                                </Text>
                                <Text style={{ margin: 5 }}>{stadion}</Text>
                                <Text style={{ margin: 5 }}>
                                    {den} {day}. {numberToMonth(parseInt(month, 10))} o {cas}
                                </Text>
                            </CardItem>
                            <Divider orientation={'vertical'} length={90} color={'black'} />
                            <CardItem style={{ flex: 2, alignItems: 'flex-start' }}>
                                {rozhodca1 ? (
                                    <Text style={listStyle.font}>
                                        {createRefereeName(rozhodca1)}
                                    </Text>
                                ) : null}
                                {rozhodca2 ? (
                                    <Text style={listStyle.font}>
                                        {createRefereeName(rozhodca2)}
                                    </Text>
                                ) : null}
                                {rozhodca3 ? (
                                    <Text style={listStyle.font}>
                                        {createRefereeName(rozhodca3)}
                                    </Text>
                                ) : null}
                                {rozhodca4 ? (
                                    <Text style={listStyle.font}>
                                        {createRefereeName(rozhodca4)}
                                    </Text>
                                ) : null}
                                {rozhodca5 ? (
                                    <Text style={listStyle.font}>
                                        {createRefereeName(rozhodca5)}
                                    </Text>
                                ) : null}
                                {rozhodca6 ? (
                                    <Text style={listStyle.font}>
                                        {createRefereeName(rozhodca6)}
                                    </Text>
                                ) : null}
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
export { MatchItem };
