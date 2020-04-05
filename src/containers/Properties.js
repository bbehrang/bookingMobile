import React, {useEffect} from 'react';
import Properties from '../components/Properties/List';
import {useDispatch, useSelector} from "react-redux";
import {fetchProperties} from "../redux/properties/actions";
import Loading from "../components/Common/Loading";
import Error from "../components/Common/Error";
const PropertiesContainer = ({navigation}) => {
    const {items, isLoading, errors} = useSelector(state => state.properties);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProperties());
    }, []);
    return (
        <Properties properties={items} isLoading={isLoading}
                    errors={errors} navigation={navigation}
                    refresh={() => dispatch(fetchProperties())}/>
    );
};

export default PropertiesContainer;
