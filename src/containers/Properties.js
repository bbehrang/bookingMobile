import React, {useEffect} from 'react';
import Properties from '../components/Properties/List';
import {useDispatch, useSelector} from "react-redux";
import {fetchProperties} from "../redux/properties/actions";
const PropertiesContainer = ({navigation}) => {
    const properties = useSelector(state => state.properties);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProperties());
    }, []);

    return (
        <Properties properties={properties} navigation={navigation}/>
    );
};

export default PropertiesContainer;
