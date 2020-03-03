import React, {useEffect, useState} from 'react';
import Item from "./Item";
import {FlatList, Platform, StatusBar, StyleSheet, TouchableOpacity, View} from "react-native";
import ThemeButton from "../Common/ThemeButton";
import Header from "../Header/Header";
import Error from "../Common/Error";
import useApi from "../../hooks/useApi";
import Loading from "../Common/Loading";

const List = ({navigation}) => {
    const [loading, results, error, get] = useApi();
    useEffect(() => {
        async function fetchData(){
            const response = await get('/properties');
        }
        fetchData();
    }, []);
    if(error) return <Error/>;
    if(loading) return <Loading/>;
        return (
                <FlatList style={styles.list}
                          data={results}
                          keyExtractor={item => item.id}
                          ListFooterComponent={<View style={{height:24}}></View>}
                          renderItem={({item}) =>
                              <TouchableOpacity style={styles.item}
                                                onPress={() =>
                                                    navigation.navigate('Search', {
                                                        screen: "Property",
                                                        params: {property: item}
                                                    })}>
                                  <Item item={item}/>
                              </TouchableOpacity>}
                />

        );
};

const styles = StyleSheet.create({
    list: {
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
        flex: 1,
        flexGrow: 1,
        backgroundColor: "#E5E5E5",

    },
    item: {
        flex: 1,
        height:140,
        marginHorizontal: 33,
        marginVertical: 18,
        shadowColor: 'rgba(0, 0, 0, 0.14)',
        elevation: Platform.OS === 'ios' ? 0 : 3,
        borderRadius:5
    }
});

export default List;
