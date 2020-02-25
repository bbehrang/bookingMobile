import React from 'react';
import {Text, View, StyleSheet} from "react-native";

const Error = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Something went wrong on our side!</Text>
            <Text style={styles.body}>Try again and if problem persists, please kindly contact our support team</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        fontFamily:'montserratBold'
    },
    body:{
        fontFamily: 'montserratMed',
        marginVertical: 20,
        marginHorizontal:20,
        textAlign: 'center'
    }
});
export default Error;
