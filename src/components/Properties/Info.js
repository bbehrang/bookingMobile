import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, View, StyleSheet, TouchableOpacity} from "react-native";
import ThemeButton from "../Common/ThemeButton";
import CommentList from './Comments/List';

const Info = ({property}) => {
    const [isFullDescHidden, setIsFullDescHidden] = useState(true);
    useEffect(() => {
        setIsFullDescHidden(true);
    },[property]);
    return (
        <>
            <Image source={{uri: property.cover_image_url}} style={styles.image}/>
            <ThemeButton title='Reserve'/>
            <Text style={[styles.infoItem, styles.name]}>{property.name}</Text>
            <Text style={styles.infoItem}>
                {
                    isFullDescHidden ?
                        property.description.substring(0, 300) + "..."
                        : property.description
                }
            </Text>
            <TouchableOpacity onPress={() => {
                setIsFullDescHidden(false);
            }}>
                { isFullDescHidden ? <Text style={styles.showFullText}>Show full text</Text> : null}
            </TouchableOpacity>
        </>
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
        marginHorizontal: 10,
        fontFamily: 'montserratMed'
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
        padding: 10,
        fontFamily: 'montserratMed'
    }
});
export default Info;
