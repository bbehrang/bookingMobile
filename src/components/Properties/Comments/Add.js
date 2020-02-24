import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, TextInput, KeyboardAvoidingView} from "react-native";
import ThemeButton from "../../Common/ThemeButton";

const Add = props => {
    const [comment, setComment] = useState('');
    useEffect(() => {
        setComment('');
    }, [comment]);
    return (
        <>
            <View style={styles.container}>
                <View style={styles.avatar}>
                    <Image style={styles.avatarImage}/>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        value={comment}
                        onChangeText={text => setComment(text)}
                        placeholder='Leave your feedback here'
                        autoCorrect={false}
                    />
                </View>
            </View>
            <ThemeButton title='Send'/>
        </>

    );
};
const styles = StyleSheet.create({
    container: {
        margin: 10,
        flexDirection: 'row',
        alignItems:'center'
    },
    avatar: {
        width:50,
        height: 50,
        backgroundColor: "#C4C4C4",
        borderRadius: 40
    },
    avatarImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
        resizeMode: 'contain',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputContainer: {
        marginHorizontal: 10
    }
});
export default Add;
