import React, {useEffect} from 'react';
import Property from "../components/Properties/Property";
import Header from "../components/Header/Header";

const PropertyScreen = ({route, navigation}) => {
    const {property} = route.params;
    return (
        <>
            <Property property={property} />
        </>
    );
};

export default PropertyScreen;
