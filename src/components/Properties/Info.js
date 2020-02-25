import React, {useEffect, useState} from 'react';
import {Image, Text, StyleSheet, TouchableOpacity, View} from "react-native";
import ThemeButton from "../Common/ThemeButton";
import CommentList from './Comments/List';
import Add from "./Comments/Add";

const Info = ({property}) => {
    const [isFullDescHidden, setIsFullDescHidden] = useState(true);
    useEffect(() => {
        setIsFullDescHidden(true);
    },[property]);
    return (
        <>
            <Image source={{uri: property.cover_image_url}} style={styles.image}/>
            <View style={styles.info}>
                <Text style={[styles.infoItem, styles.name]}>{property.name}</Text>
                <TouchableOpacity onPress={() => setIsFullDescHidden(!isFullDescHidden)} activeOpacity={0.8}>
                    <Text style={styles.infoItem}>
                        {
                            isFullDescHidden ?
                                property.description.substring(0, 300) + "..."
                                : property.description
                        }
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <ThemeButton title='Reserve' customStyles={styles.button}/>
            </View>
            <Text style={styles.sectionTitle}>Comments</Text>

        </>
    );
};
const styles = StyleSheet.create({
    image:{
        alignSelf: 'stretch',
        height: 144,
        marginBottom: 20
    },
    info:{
        marginHorizontal: 23,
        alignSelf: 'center',
        marginTop: 22,
        elevation: 2,
        backgroundColor: 'white',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal:10
    },
    sectionTitle: {
        fontFamily: 'montserratBold',
        marginLeft: 24,
        fontSize: 15
    },
    infoItem:{
        marginHorizontal: 10,
        fontFamily: 'montserratMed',
        marginBottom: 5,
        lineHeight:20
    },
    name: {
        fontFamily: 'montserratBold',
        marginVertical: 5
    },
    showFullText:{
        alignSelf: 'center',
        color: '#009688',
        marginVertical: 15,
        borderWidth: 0.5,
        borderColor : '#009688',
        padding: 10,
        fontFamily: 'montserratMed'
    },
    button:{
        alignSelf: 'flex-end',
        width:113,
        height:37,
        marginRight: 23,
        marginTop: 19
    }
});
export default Info;
