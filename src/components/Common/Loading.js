import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View} from "react-native";

const Loading = props => {
    return (
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator size="large" color="#009688"/>
        </View>
    );
};

export default Loading;
