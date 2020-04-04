import React from 'react';
import List from "../components/Properties/List";
import {Text, View} from "react-native";
import Header from "../components/Header/Header";
import Properties from "../containers/Properties";

const PropertiesScreen = ({route, navigation}) => {
    return (
        <Properties navigation={navigation}/>
    );
};

export default PropertiesScreen;
