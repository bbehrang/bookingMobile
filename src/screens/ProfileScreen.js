import React, {useState} from 'react';
import {Button, Text, View} from "react-native";
import {AuthSession, Linking} from 'expo';
import * as Google from 'expo-google-app-auth';
import Amplify, {Auth} from "aws-amplify";
import awsconfig from '../../aws-exports';
import * as WebBrowser from "expo-web-browser";
import axios from 'axios';
import {Divider} from "react-native-paper";
Amplify.configure(awsconfig);
const ProfileScreen = props => {
    const [state, setState] = useState(null);
    const _openAuthSessionAsync = async () => {
        try {
            let result = await WebBrowser.openAuthSessionAsync(
                // We add `?` at the end of the URL since the test backend that is used
                // just appends `authToken=<token>` to the URL provided.
            );
            let redirectData;
            if (result.url) {
                redirectData = Linking.parse(result.url);
            }
            setState({result, redirectData});
        } catch (error) {
            alert(error);
            console.log(error);
        }
    };
    const _renderUserInfo = () => {
        return (
            <View style={{alignItems: 'center'}}>
                <Text>Hello</Text>
            </View>
        );
    };
    const _handlePressAsync = async () => {
        let redirectUrl = AuthSession.getRedirectUrl();

        let result = await AuthSession.startAsync({
            authUrl:
                `https://booking-user-pool-domain-customer.auth.eu-central-1.amazoncognito.com/oauth2/authorize?identity_provider=Google&redirect_uri=${encodeURIComponent(redirectUrl)}&response_type=CODE&client_id=5vpqdi2hlkvqjsjqd3gsama9c8&scope=email%20profile`
        });

        if (result.type !== 'success') {
            alert('Uh oh, something went wrong');
            return;
        }
        console.log('res', result);
        let accessToken = result.params.code;


        const params = new URLSearchParams();
        params.append('grant_type', 'authorization_code');
        params.append('client_id', '5vpqdi2hlkvqjsjqd3gsama9c8');
        params.append('code', accessToken);
        params.append('redirect_uri', 'https://auth.expo.io/@bbehrang/Bookingdesc');

        axios({
            method: 'post',
            url: 'https://booking-user-pool-domain-customer.auth.eu-central-1.amazoncognito.com/oauth2/token',
            data: params,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });

    };
    const checkLogin = () => {
        Auth.currentAuthenticatedUser({
            bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
        }).then(user => console.log(user))
    };
    const logout = () => {
        Auth.signOut()
            .then(data => console.log(data))
            .catch(err => console.log(err));
    };
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            {!state ? (
                <Button title="Open FB Auth" onPress={_handlePressAsync}/>

            ) : (
                _renderUserInfo()
            )}
            <View  style={{height:20}}/>
            <Button title="check logged in" onPress={checkLogin} />
            <View  style={{height:20}}/>
            <Button title="logout" onPress={logout} />
        </View>
    );
};

export default ProfileScreen;
