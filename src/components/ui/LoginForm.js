import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { loginStyle } from '../styles/styles';
import { emailChanged, passwordChanged, loginUser } from '../../redux/actions';
import { Card, CardItem, Button, Input, Spinner } from '../reusable';

const LOG_IN = 'Prihlásenie';
class LoginForm extends Component {
    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    renderButton() {
        if (this.props.loading === true) {
            return <Spinner size="small" />;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)} style={{ width: 200, height: 50 }}>
                {LOG_IN}
            </Button>
        );
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <View
                    style={{
                        marginBottom: 90
                    }}
                >
                    <Text> Tu by som dal iconu </Text>
                </View>
                <Card flexDir={'column'}>
                    <CardItem>
                        <Input
                            placeholder={'meno@email.sk'}
                            label={'Email'}
                            styleContainer={loginStyle.inputContainer}
                            value={this.props.email}
                            onChangeText={this.onEmailChange.bind(this)}
                        />
                    </CardItem>
                    <CardItem>
                        <Input
                            secureTextEntry
                            placeholder={'heslo'}
                            label={'Heslo'}
                            value={this.props.password}
                            styleContainer={loginStyle.inputContainer}
                            onChangeText={this.onPasswordChange.bind(this)}
                        />
                    </CardItem>
                    {this.props.error ? (
                        <Text
                            style={{
                                fontSize: 14,
                                alignSelf: 'center',
                                marginVertical: 5,
                                marginHorizontal: 20,
                                color: 'red'
                            }}
                        >
                            {this.props.error}
                        </Text>
                    ) : null}
                    <CardItem styl={{ margin: 10 }}>{this.renderButton()}</CardItem>
                </Card>
            </View>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
    return { email, password, error, loading };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
