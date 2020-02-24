import React from 'react';
import List from "../components/Properties/List";
import {Text, View} from "react-native";

const PropertiesScreen = ({navigation}) => {
    return (
        <>
            <List navigation={navigation}/>
        </>
    );
};

export default PropertiesScreen;
