import React, {useEffect, useRef, useState} from 'react';
import RegisterFirstStep from '../components/User/Register/RegisterFirstStep';
import {useDispatch, useSelector} from "react-redux";
import {hideUserError, resendVerificationCode, signInUser, signUpUser, verifyUser} from "../redux/user/actions";
import RegisterSecondStep from "../components/User/Register/RegisterSecondStep";
import {Alert} from "react-native";
import RegisterThirdStep from "../components/User/Register/RegisterThirdStep";
import Loading from "../components/Common/Loading";
import Error from "../components/Common/Error";
const Register = ({navigation}) => {
    const errors = useSelector(state => state.user.errors);
    const [step, setStep] = useState(1);
    const [fields, setFields] = useState({
        email : '',
        given_name: '',
        family: '',
    });
    const dispatch = useDispatch();
    const submitFirstStep = (values) => {
        const {email, given_name, family_name} = values;
        setFields({
            email, given_name, family_name
        });
        setStep(2);
    };
    const goToStep = (step) => {
        setStep(step)
    };
    const submit = ({password}) => {
        setStep(3);
        dispatch(signUpUser({...fields, password}));
    };
    const verify = ({code}) =>{
        setStep(4);
        return dispatch(verifyUser(code));
    };
    const resendCode = () => {
      return dispatch(resendVerificationCode(fields.username));
    };
    const hideError = () => {
        setStep(step - 1);
        return dispatch(hideUserError());
    };
    if(errors) return <Error message={errors.message}
                             pressHandler={hideError}/>;
    else{
        if(step === 1)
            return (
                <RegisterFirstStep navigation={navigation}
                                   submitFirstStep={submitFirstStep}
                                   setStep={setStep}
                                   fields = {fields}
                />
            );
        else if(step === 2) return <RegisterSecondStep submit={submit} navigation={navigation} goToStep={goToStep}/>;
        else if(step === 3) return  <RegisterThirdStep verify={verify} resendCode={resendCode} navigation={navigation}/>;
        else return <Loading/>;
    }


};

export default Register;
