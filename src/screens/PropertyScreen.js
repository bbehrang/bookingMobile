import React, {useEffect} from 'react';
import PropertyContainer from "../containers/Property";
import Header from "../components/Header/Header";

const PropertyScreen = ({route, navigation}) => {
    const {property} = route.params;
    return (
        <PropertyContainer property={property}/>
    );
};

export default PropertyScreen;
