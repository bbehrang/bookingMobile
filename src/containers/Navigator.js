import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as Font from "expo-font";
import {Ionicons} from "@expo/vector-icons";
import NavigatorComponent from "../NavigatorComponent";
import {loadFonts} from "../redux/font/actions";

const Navigator = () => {

    const isFontLoaded = useSelector(state => state.font);
    const dispatch = useDispatch();
    useEffect(() => {
        async function loadFontsAsync(){
            await Font.loadAsync({
                //...Ionicons.font,
                'montserratMed': require('../../assets/fonts/Montserrat-Medium.ttf'),
                'montserratBold': require('../../assets/fonts/Montserrat-SemiBold.ttf'),
            });
            dispatch(loadFonts(
                Font.isLoaded('montserratMed')
                && Font.isLoaded('montserratBold')));
        }
        loadFontsAsync();
    },[]);
    return (
        <NavigatorComponent isFontLoaded={isFontLoaded}/>
    );
};



export default Navigator;
