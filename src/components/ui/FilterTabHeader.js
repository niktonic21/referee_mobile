import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Animated } from 'react-native';
import { connect } from 'react-redux';
import { filterChanged } from '../../redux/actions/DataAction';
import { Button } from '../reusable';
import { ligueToLig, createRefereeName } from '../../utils/Utils';
import FilterHeader from '../reusable/FilterHeader';

const idLiga = 0;
const idMesiac = 1;
const idRozhodca = 2;
let offList = [{ value: 'Rozhodca', label: 'Rozhodca' }];

class FilterTabHeader extends Component {
    constructor(props) {
        super(props);
        this.buttonID = null;
        this.pickerData = this.props.filterData[idLiga];
        if (this.props.filterData[idRozhodca]) {
            Object.entries(this.props.filterData[idRozhodca]).forEach(([key, value]) => {
                const item = { value: key, label: createRefereeName(value) };
                offList.push(item);
            });
        }
        this.state = {
            showPicker: false,
            pickerData: this.props.filterData[idLiga],
            height: new Animated.Value(0),
            opacity: new Animated.Value(0),
            visible: false
        };
    }

    componentWillMount() {
        if (this.props.loggedIn && this.props.user) {
            const val = offList.find(r => r.value === this.props.user.uid);
            this.setState({ pickerItemRozhodcaLabel: val.label });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.closeHeader === true && nextProps.closeHeader === false) {
            this.setState({
                showPicker: false
            });
            this.buttonID = null;
        }
        if (nextProps.user && this.props.loggedIn !== nextProps.loggedIn) {
            const val = offList.find(r => r.value === nextProps.user.uid);
            this.setState({ pickerItemRozhodcaLabel: val.label });
        } else {
            this.setState({ pickerItemRozhodcaLabel: 'Rozhodca' });
        }
    }

    setPickerValue(value) {
        switch (this.buttonID) {
            case idLiga: {
                const val = ligueToLig(value);
                this.setState({ pickerItemLiga: value, pickerItemLigaLabel: val });
                this.props.filterChanged('liga', value);
                break;
            }
            case idMesiac: {
                this.setState({ pickerItemMesiac: value });
                this.props.filterChanged('mesiac', value);
                break;
            }
            case idRozhodca: {
                const val = offList.find(r => r.value === value);
                this.setState({ pickerItemRozhodca: value, pickerItemRozhodcaLabel: val.label });
                this.props.filterChanged('rozhodca', value);
                break;
            }
            default:
                break;
        }
    }

    selectPickerData(id) {
        if (id === idLiga) {
            this.setState({ pickerData: this.props.filterData[idLiga] });
        } else if (id === idMesiac) {
            this.setState({ pickerData: this.props.filterData[idMesiac] });
        } else {
            this.setState({ pickerData: offList });
        }
    }

    showPicker(idBtn = idLiga) {
        if (idBtn === this.buttonID || this.buttonID === null) {
            if (this.state.showPicker) {
                this.setState({
                    showPicker: false
                });
                this.headerOff();
                setTimeout(() => (this.buttonID = null), 100);
            } else {
                this.setState({
                    showPicker: true
                });
                this.buttonID = idBtn;
                this.selectPickerData(this.buttonID);
                this.headerOn();
            }
        } else {
            this.buttonID = idBtn;
            this.selectPickerData(this.buttonID);
        }
    }

    headerOff() {
        Animated.timing(this.state.height, {
            duration: this.slideDuration,
            toValue: 0
        }).start();
        Animated.timing(this.state.opacity, {
            duration: this.slideDuration,
            toValue: 0
        }).start();
        this.props.isVisible(0);
        this.setState({ showPicker: false });
    }

    headerOn() {
        Animated.timing(this.state.height, {
            duration: this.slideDuration,
            toValue: this.props.headerHeight
        }).start();
        Animated.timing(this.state.opacity, {
            duration: this.slideDuration,
            toValue: 1
        }).start();
        this.props.isVisible(150);
        this.setState({ showPicker: true });
    }

    renderFilter() {
        let val;
        switch (this.buttonID) {
            case idLiga: {
                val = this.state.pickerItemLiga;
                break;
            }
            case idMesiac: {
                val = this.state.pickerItemMesiac;
                break;
            }
            case idRozhodca: {
                val = this.state.pickerItemRozhodca;
                break;
            }
            default:
                val = '';
        }
        return (
            <FilterHeader
                selectedItem={value => this.setPickerValue(value)}
                data={this.state.pickerData}
                select={val}
            />
        );
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerButtons}>
                    <Button
                        onPress={() => {
                            this.showPicker(idLiga);
                        }}
                        style={styles.buttons}
                    >
                        {this.state.pickerItemLigaLabel || 'Liga'}
                    </Button>
                    <Button
                        onPress={() => {
                            this.showPicker(idMesiac);
                        }}
                        style={styles.buttons}
                    >
                        {this.state.pickerItemMesiac || 'Mesiac'}
                    </Button>
                    <Button
                        onPress={() => {
                            this.showPicker(idRozhodca);
                        }}
                        style={styles.buttons}
                    >
                        {this.state.pickerItemRozhodcaLabel || 'Rozhodca'}
                    </Button>
                </View>
                <Animated.View
                    style={[
                        styles.header,
                        { height: this.state.height },
                        { opacity: this.state.opacity }
                    ]}
                >
                    {this.renderFilter()}
                </Animated.View>
            </View>
        );
    }
}

const mapStateToProps = ({ ui, auth, data }) => {
    const { filterValues } = data;
    const { filterSwitch } = ui;
    const { user, loggedIn } = auth;
    return { filterSwitch, user, loggedIn, filterValues };
};

export default connect(mapStateToProps, { filterChanged })(FilterTabHeader);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //flexDirection: 'column',
        alignItems: 'center'
        // backgroundColor: 'black',
        // paddingVertical: 5,
        // paddingHorizontal: 5
    },
    containerButtons: {
        flex: 1,
        maxHeight: 50,
        flexDirection: 'row',
        alignItems: 'center',
        //backgroundColor: 'white',
        paddingVertical: 5,
        paddingHorizontal: 5
    },
    header: {
        position: 'absolute',
        marginTop: 50,
        top: 0,
        left: 0,
        right: 0,
        overflow: 'hidden'
    },
    buttons: {
        flex: 1,
        backgroundColor: '#c53211',
        width: Dimensions.get('window').width / 3 - 5,
        height: 30,
        marginRight: 5,
        borderColor: '#c53211'
    }
});
