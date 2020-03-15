import React, {useContext, useEffect} from 'react';
import Info from "../Properties/Info";
import Add from "../Properties/Comments/Add";
import Comment from "../Properties/Comments/Item";
import {FlatList, Platform, StatusBar, StyleSheet} from "react-native";
import useApi from "../../hooks/useApi";
import Error from "../Common/Error";
import Loading from "../Common/Loading";
import {PropertiesContext} from "../../context/PropertiesContext";

const Property = ({property}) => {
    const [loading, results, error, get] = useApi();
    const {state: {fetchedPropertiesWithDetails}, fetchProperty} = useContext(PropertiesContext);
    const path = property ? `/properties/${property.id}/comments` : null;

    useEffect(() => {
        async function fetchData() {
            await get(path);
        }
        if(property && fetchedPropertiesWithDetails.filter(item => item.id === property.id).length <= 0)
            fetchData();
    }, [property]);
    useEffect(() => {
        fetchProperty(results);
    }, [results]);
    if (error) return <Error/>;
    if (loading) return <Loading/>;
    return (
        <FlatList
            ListHeaderComponent={<Info property={property}/>}
            ListFooterComponent={<Add path={path}/>}
            data={results}
            extraData={property}
            renderItem={({item}) => <Comment item={item}/>}
            keyExtractor={(item) => item.id}
            style={styles.property}
        />
    );
};
const styles = StyleSheet.create({
    property: {
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    }
});
export default Property;
