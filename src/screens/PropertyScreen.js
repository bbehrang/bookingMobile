import React from 'react';
import Property from "../components/Properties/Property";

const PropertyScreen = ({navigation}) => {
    const item = navigation.getParam('item');
    return (
        <>
            <Property item={item} />
        </>
    );
};

export default PropertyScreen;
