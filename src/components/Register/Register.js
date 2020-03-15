import React, {useState} from 'react';
import {Button, TextInput} from "react-native";
import { Auth } from 'aws-amplify';


const Register = props => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [family, setFamily] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPass] = useState('');


    const register = () => {
        Auth.signUp({
            username,
            password,
            attributes: {
                email,          // optional
                given_name: name,
                family_name: family// optional - E.164 number convention
                // other custom attributes
            },
            validationData: []  //optional
        })
            .then(data => console.log(data))
            .catch(err => console.log(err));

// After retrieving the confirmation code from the user
        Auth.confirmSignUp(username, code, {
            // Optional. Force user confirmation irrespective of existing alias. By default set to True.
            forceAliasCreation: true
        }).then(data => console.log(data))
            .catch(err => console.log(err));

        Auth.resendSignUp(username).then(() => {
            console.log('code resent successfully');
        }).catch(e => {
            console.log(e);
        });
    };
    return (
        <>
            <TextInput onChangeText={text => setEmail(text)}
                       value={email}/>
            <TextInput onChangeText={text => setName(text)}
                       value={name}/>
            <TextInput onChangeText={text => setFamily(text)}
                       value={family}/>
            <TextInput onChangeText={text => setPass(text)}
                       value={password}/>
                       <Button title={'submit'} onPress={register}/>

        </>
    );
};

export default Register;
