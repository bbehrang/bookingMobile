import React from 'react';
import {Image, Text, TouchableOpacity, View, StyleSheet} from "react-native";

const Item = ({item}) => {
    return (
        <TouchableOpacity style={styles.item} onPress={() => console.log('clicked')}>
            <Image source={{uri: item.cover_image_url}} style={styles.image} />
            <View style={styles.info}>
                <Text style={[styles.infoItem, styles.name]}>{item.name}</Text>
                <Text style={styles.infoItem}>{item.description ? item.description.substring(0, 100) : ""}...</Text>
                <Text style={[styles.infoItem, styles.viewMore]}>View more</Text>
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    item:{
        height: 150,
        flex: 1,
        flexDirection: 'row',
        marginVertical: 10,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10

    },
    info:{
        flex: 1,
        marginLeft: 10,
    },
    infoItem:{

    },
    image: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        flex: 1,
        resizeMode : 'cover'
    },
    name: {
        fontWeight: 'bold'
    },
    viewMore: {
        color: "#009688"
    }
});
export default Item;
