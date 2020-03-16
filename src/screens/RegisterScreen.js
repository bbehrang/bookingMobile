import React, {useEffect} from 'react';
import Register from "../components/Register/Register";

const RegisterScreen = ({route, navigation}) => {
    return (
        <>
            <Register navigation={navigation}/>
        </>
    );
};

export default RegisterScreen;
