import React from 'react';
import Item from "./Item";
import {FlatList, Platform, StatusBar, StyleSheet, TouchableOpacity, View} from "react-native";

const List = ({properties, navigation}) => {
    return (
        <FlatList style={styles.list}
                  data={properties}
                  keyExtractor={item => item.id}
                  ListFooterComponent={<View style={{height: 24}}></View>}
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
        height: 140,
        marginHorizontal: 33,
        marginVertical: 18,
        shadowColor: 'rgba(0, 0, 0, 0.14)',
        elevation: Platform.OS === 'ios' ? 0 : 3,
        borderRadius: 5
    }
});

export default List;
