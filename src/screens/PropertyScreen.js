import React from 'react';
import Property from "../components/Properties/Property";

const PropertyScreen = ({route, navigation}) => {
    const {property} = route.params;
    return (
        <>
            <Property property={property} />
        </>
    );
};

export default PropertyScreen;
