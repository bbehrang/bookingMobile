import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const Error = ({message, pressHandler}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Something went wrong!</Text>
            {
                pressHandler ?
                    <View style={styles.back}>
                        <TouchableOpacity style={styles.arrow} onPress={pressHandler}>
                            <Image style={styles.arrowPic}
                                   source={require('../../../assets/back.png')}

                            />
                        </TouchableOpacity>
                    </View>
                    : null
            }
            {
                message ?
                    <Text style={styles.body}>{message}</Text> :
                    <Text style={styles.body}>Try again and if problem persists, please kindly contact our support
                        team</Text>
            }

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: 'montserratBold'
    },
    body: {
        fontFamily: 'montserratMed',
        marginVertical: 20,
        marginHorizontal: 20,
        textAlign: 'center'
    }
});
export default Error;
