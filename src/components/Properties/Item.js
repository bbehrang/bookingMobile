import React from 'react';
import {Image, Text, TouchableOpacity, View, StyleSheet} from "react-native";

const Item = ({item}) => {
    return (
        <>
            <Image source={{uri: item.cover_image_url}} style={styles.image}/>
            <View style={styles.info}>
                <Text style={[styles.infoItem, styles.name]}>{item.name}</Text>
                <Text style={styles.infoItem}>{item.description ? item.description.substring(0, 100) : ""}...</Text>
                <Text style={[styles.infoItem, styles.viewMore]}>View more</Text>
            </View>
        </>
    );
};
const styles = StyleSheet.create({

    info: {
        flex: 1,
        marginLeft: 10,

    },
    infoItem: {
        fontFamily: 'montserratMed',
        fontSize: 13
    },
    image: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        flex: 1,
        resizeMode: 'cover'
    },
    name: {
        fontWeight: 'bold'
    },
    viewMore: {
        color: "#009688"
    }
});
export default Item;
