import React from 'react';
import List from "../components/Properties/List";
import {Text, View} from "react-native";
import Header from "../components/Header/Header";

const PropertiesScreen = ({route, navigation}) => {
    return (
        <>
            <List navigation={navigation}/>
        </>
    );
};

export default PropertiesScreen;
