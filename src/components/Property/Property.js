import React, {useEffect} from 'react';
import Info from "../Properties/Info";
import Add from "../Properties/Comments/Add";
import Comment from "../Properties/Comments/Item";
import {FlatList, Platform, StatusBar, StyleSheet} from "react-native";
import useApi from "../../hooks/useApi";
import Error from "../Common/Error";
import Loading from "../Common/Loading";

const Property = ({property}) => {
    const [get, loading, results, error] = useApi();
    const path = property ? `/properties/${property.id}/comments` : null;
    useEffect(() => {
        async function fetchData() {
            const response = get(path);
        }
        if(property)
            fetchData();
    }, [property]);
    if (error) return <Error/>;
    if (loading) return <Loading/>;
    return (
        <FlatList
            ListHeaderComponent={<Info property={property}/>}
            ListFooterComponent={<Add/>}
            data={results.comments}
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
