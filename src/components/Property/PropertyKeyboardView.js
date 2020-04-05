import React, {useEffect, useState} from 'react';
import {FlatList, Dimensions, Platform,
    StatusBar, StyleSheet, TextInput,Animated,
    Keyboard, UIManager} from "react-native";
import Property from "./Property";
import Loading from "../Common/Loading";
import Error from "../Common/Error";
const {State: TextInputState} = TextInput;
const PropertyKeyboardView = ({property, isLoading, errors, comments}) => {
    const [shift, setShift] = useState(new Animated.Value(0));
    let keyboardDidShowSub;
    let keyboardDidHideSub;
    useEffect(() => {
        keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', handleKeyboardDidShow);
        keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', handleKeyboardDidHide);
        return function(){
            keyboardDidHideSub.remove();
            keyboardDidShowSub.remove();
        }
    });
    const handleKeyboardDidShow = (event) => {
        const {height: windowHeight} = Dimensions.get('window');
        const keyboardHeight = event.endCoordinates.height;
        const currentlyFocusedField = TextInputState.currentlyFocusedField();
        UIManager.measure(currentlyFocusedField, (originX, originY, width, height, pageX, pageY) => {
            const fieldHeight = height;
            const fieldTop = pageY;
            const gap = (windowHeight - keyboardHeight) - (fieldTop + fieldHeight);
            if (gap >= 0) {
                return;
            }
            Animated.timing(
                shift,
                {
                    toValue: gap - 130,
                    duration: 500,
                    useNativeDriver: true,
                }
            ).start();
        });
    };
    const handleKeyboardDidHide = () => {
        Animated.timing(
            shift,
            {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }
        ).start();
    };
    if(isLoading || !comments) return <Loading/>;
    if(errors) return <Error/>;
    return (
        <Animated.View style={[styles.container, {transform: [{translateY: shift}]}]}>
            <Property property={property} comments={comments}/>
        </Animated.View>

    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        justifyContent: 'space-around',
        left: 0,
        position: 'absolute',
        top: 0,
        width: '100%',
        zIndex: 2
    }
});
export default PropertyKeyboardView;
