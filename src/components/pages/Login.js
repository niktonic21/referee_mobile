import React, { Component } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Text } from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { loginStyle } from '../styles/styles';
import { loggedInChange } from '../../redux/actions';
import LoginForm from '../ui/LoginForm';
import { CardItem, Button, Spinner } from '../reusable';

const LOG_OUT = 'Odhlásiť sa';
class Login extends Component {
    //componentWillMount() {
    //     firebase.auth().onAuthStateChanged(user => {
    //         if (user) {
    //             this.props.loggedInChange(user, (this.props.loggedIn = true));
    //         } else {
    //             this.props.loggedInChange(user, (this.props.loggedIn = false));
    //         }
    //     });
    // }

    renderContent() {
        switch (this.props.loggedIn) {
            case true:
                return (
                    <CardItem styl={{ margin: 10 }}>
                        <Text style={{ marginVertical: 10 }}>
                            Prihláseny: {this.props.user.displayName}
                        </Text>
                        <Button
                            onPress={() => firebase.auth().signOut()}
                            styl={{ width: 200, height: 70 }}
                        >
                            {LOG_OUT}
                        </Button>
                    </CardItem>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner />;
        }
    }

    render() {
        return (
            <ScrollView style={{ flex: 1 }}>
                <KeyboardAvoidingView behavior="position">
                    <View style={loginStyle.containerStyle}>{this.renderContent()}</View>
                </KeyboardAvoidingView>
            </ScrollView>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    const { user, loggedIn } = auth;
    return { user, loggedIn };
};

export default connect(mapStateToProps, { loggedInChange })(Login);
