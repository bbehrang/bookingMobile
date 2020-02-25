import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, TextInput} from "react-native";
import ThemeButton from "../../Common/ThemeButton";

const Add = props => {
    const [comment, setComment] = useState('');
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
            <View style={{height: 70}}>
                <ThemeButton title='Send' customStyles={styles.button}/>
            </View>

        </>

    );
};
const styles = StyleSheet.create({
    container: {
        margin: 24,
        flexDirection: 'row',
        alignItems: 'center',

    },
    avatar: {
        width: 50,
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
        marginLeft: 10,
        flexGrow: 1
    },
    input: {
        borderRadius: 3,
        borderWidth: 0.5,
        borderColor: "#CECECE",
        flexGrow: 1,
        paddingHorizontal: 5
    },
    button: {
        width: 85,
        height: 33,
        alignSelf: 'flex-start',
        marginLeft: 24
    }
});
export default Add;
