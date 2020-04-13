import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { useFocusEffect } from '@react-navigation/native';
import Login from '../components/User/Login';
import {hideUserError, setUserError, signInGoogle, signInUser} from "../redux/user/actions";
import Error from "../components/Common/Error";
import Loading from "../components/Common/Loading";
import * as WebBrowser from "expo-web-browser";
import * as AuthSession from 'expo-auth-session';
import axios from "axios";

const LoginScreen = ({navigation}) => {
    useFocusEffect(() => {
        //if(token) navigation.navigate('Search');
    });
    const {token, errors, isLoading} = useSelector(state => state.user);
    const dispatch = useDispatch();
    const submitLogin = ({email, password}) => {
        const username = email ? email.trim() : null;
        return dispatch(signInUser(username, password));
    };
    const loginGoogle = async () => {
        let redirectUrl = AuthSession.getRedirectUrl();

        let result = await AuthSession.startAsync({
            authUrl:
                `https://booking-user-pool-domain-customer.auth.eu-central-1.amazoncognito.com/oauth2/authorize?identity_provider=Google&redirect_uri=${encodeURIComponent(redirectUrl)}&response_type=CODE&client_id=5vpqdi2hlkvqjsjqd3gsama9c8&scope=email%20profile`
        });

        if (result.type !== 'success') {
            alert('Your login was not successful');
            return;
        }
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
    const loginBackHandler = () => {
        dispatch(hideUserError());
        navigation.navigate('Profile');
    };
    if(errors) return <Error pressHandler={loginBackHandler}
                             message={errors.message ? errors.message : null} />;
    if(isLoading) return <Loading/>;
    if(token) navigation.navigate('Search');
    return (
        <Login navigation={navigation} submit={submitLogin} loginGoogle={loginGoogle}/>
    );
};

export default LoginScreen;
