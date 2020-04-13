import React from 'react';
import {KeyboardAvoidingView, TextInput} from "react-native";
import Property from "./Property";

const PropertyKeyboardView = ({property, comments}) => {
    return (
        <KeyboardAvoidingView behavior={"height"} enabled>
            <Property property={property} comments={comments}/>
        </KeyboardAvoidingView>
    );
};
export default PropertyKeyboardView;
