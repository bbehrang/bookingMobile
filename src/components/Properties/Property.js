import React, {useState} from 'react';
import {Image, ScrollView, Text, View, StyleSheet, TouchableOpacity} from "react-native";
import ThemeButton from "../Common/ThemeButton";

const Property = ({item}) => {
    const [isFullDescHidden, setIsFullDescHidden] = useState(true);
    return (
        <ScrollView>
            <Image source={{uri: item.cover_image_url}} style={styles.image}/>
            <ThemeButton title='Reserve'/>
                <Text style={[styles.infoItem, styles.name]}>{item.name}</Text>
                <Text style={styles.infoItem}>
                    {
                        isFullDescHidden ?
                        item.description.substring(0, 300) + "..."
                        : item.description
                    }
                </Text>
                <TouchableOpacity onPress={() => {
                    setIsFullDescHidden(false);
                }}>
                    { isFullDescHidden ? <Text style={styles.showFullText}>Show full text</Text> : null}
                </TouchableOpacity>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: 150,
        marginBottom: 20
    },
    info:{
        marginHorizontal: 20,
        alignSelf: 'center',
        marginTop: 20
    },
    infoItem:{
        marginHorizontal: 10
    },
    name: {
        fontWeight: 'bold'
    },
    showFullText:{
        alignSelf: 'center',
        color: '#009688',
        marginVertical: 15,
        borderWidth: 0.5,
        borderColor : '#009688',
        padding: 5,
    }
});
export default Property;
