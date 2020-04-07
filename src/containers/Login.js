import React from 'react';
import LoginForm from '../components/User/Login';
import {useDispatch, useSelector} from "react-redux";
import {signInUser} from "../redux/user/actions";
const Login = ({navigation}) => {
    const dispatch = useDispatch();
    const submitLogin = ({email, password}) => {
        return dispatch(signInUser(email, password));
    };
    return (
        <LoginForm navigation={navigation} submit={submitLogin}/>
    );
};

export default Login;
