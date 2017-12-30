import React, { Component } from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { loginStyle } from '../styles/styles';
import { loggedInChange } from '../../redux/actions';
import LoginForm from '../ui/LoginForm';
import { CardItem, Button, Spinner } from '../reusable';

class Login extends Component {
    componentWillMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.loggedInChange(user, (this.props.loggedIn = true));
            } else {
                this.props.loggedInChange(user, (this.props.loggedIn = false));
            }
        });
    }

    renderContent() {
        switch (this.props.loggedIn) {
            case true:
                return (
                    <CardItem styl={{ margin: 10 }}>
                        <Button
                            onPress={() => firebase.auth().signOut()}
                            styl={{ width: 200, height: 30 }}
                        >
                            Odhlásiť sa
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
