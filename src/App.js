import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Card, CardSection, Spinner } from './components/common';
import LogInForm from './components/LogInForm';

class App extends Component {
    state = { loggedIn: null }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCCXECBUom3fLcvaTdY2uMTk3j0NdwTXzo',
            authDomain: 'authreact-cd85b.firebaseapp.com',
            databaseURL: 'https://authreact-cd85b.firebaseio.com',
            projectId: 'authreact-cd85b',
            storageBucket: 'authreact-cd85b.appspot.com',
            messagingSenderId: '839551835998'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });    
            }
            console.log('user state changed', this.state.loggedIn);
        });
    }
    renderContent() {
        switch (this.state.loggedIn) {
            case false:
                return <LogInForm />;
            case true:
                return (
                    <Card>
                        <CardSection>
                            <Button onPress={() => firebase.auth().signOut()}>
                                Log Out
                            </Button>
                        </CardSection>
                    </Card>
                );
            default:
                return (
                    <Card>
                        <CardSection>
                            <Spinner size={'large'} />
                        </CardSection>
                    </Card>
                );
        }
    }
    render() {
        return (
            <View>
                <Header headerText={'Authentication'} />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
