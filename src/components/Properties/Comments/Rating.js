import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from "react-native";

const Rating = ({rating, style}) => {
    const [mood, setMood] = useState({value: "Neutral", color: "#A09D9D"});
    useEffect(() => {
        if(rating == 0){
             //@TODO
        }
    });
    return (
        <View style={{flexDirection:'row', alignItems:'center', justifyContent: 'flex-end'}}>
            <Text style={{fontFamily: 'montserratBold', color:'black', fontSize: 12}}>{mood.value}</Text>
            <View style={{flexDirection:'row'}}>
                <View style={[styles.stars, {backgroundColor: mood.color}]}/>
                <View style={[styles.stars, {backgroundColor: mood.color}]}/>
                <View style={[styles.stars, {backgroundColor: mood.color}]}/>
                <View style={[styles.stars, {backgroundColor: mood.color}]}/>
                <View style={[styles.stars, {backgroundColor: mood.color}]}/>
            </View>

        </View>
    );
};
const styles = StyleSheet.create({
    stars :{
        width: 5,
        height: 8,
        marginLeft: 5,
    }
});
export default Rating;
