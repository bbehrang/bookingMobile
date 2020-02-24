import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from "react-native";

const ThemeButton = ({title, pressHandler}) => {
    return (
        <TouchableOpacity onPress={pressHandler} style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        shadowColor: "rgba(0, 0, 0, 0.15)",
        shadowOffset : {width: 0, height: 4},
        shadowRadius : 5,
        backgroundColor: "#009688",
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        width: 200,
        alignSelf: 'center',

    },
    text:{
        color: "#fff",
        fontFamily: 'montserratMed'
    }
});

export default ThemeButton;
