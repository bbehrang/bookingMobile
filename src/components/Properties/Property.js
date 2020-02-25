import React, {useEffect, useState} from 'react';
import {FlatList, KeyboardAvoidingView, Platform, StatusBar, StyleSheet} from "react-native";
import Info from "./Info";
import Comment from "./Comments/Item";
import Add from "./Comments/Add";
import Header from "../Header/Header";

const DATA = [
    {
        "id": "1",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a aliquam dolor, non aliquam metus. Aenean vel nisi quis mauris tincidunt elementum. In congue dolor in iaculis lobortis. Nullam facilisis massa dui, quis laoreet nisi vehicula at. Nulla in sapien eu arcu consequat facilisis. Ut ultricies urna sed purus tristique rutrum. Vivamus rhoncus rutrum elit. Nulla vitae dictum leo",
        "created_date": "2020-02-23T20:01:13.653Z",
        "mood_type": 0,
        "author": {
            "first_name": "John",
            "last_name": "Doe",
            "avatar_url": "https://gravatar.com/avatar/54c91979efae1b4cab6f031fbe6a8903?s=400&d=robohash&r=x"
        }
    },
    {
        "id": "2",
        "text": "Lo2rem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a aliquam dolor, non aliquam metus. Aenean vel nisi quis mauris tincidunt elementum. In congue dolor in iaculis lobortis. Nullam facilisis massa dui, quis laoreet nisi vehicula at. Nulla in sapien eu arcu consequat facilisis. Ut ultricies urna sed purus tristique rutrum. Vivamus rhoncus rutrum elit. Nulla vitae dictum leo",
        "created_date": "2020-02-23T20:01:13.653Z",
        "mood_type": 0,
        "author": {
            "first_name": "John",
            "last_name": "Doe",
            "avatar_url": "https://gravatar.com/avatar/54c91979efae1b4cab6f031fbe6a8903?s=400&d=robohash&r=x"
        }
    },
    {
        "id": "3",
        "text": "Lo3rem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a aliquam dolor, non aliquam metus. Aenean vel nisi quis mauris tincidunt elementum. In congue dolor in iaculis lobortis. Nullam facilisis massa dui, quis laoreet nisi vehicula at. Nulla in sapien eu arcu consequat facilisis. Ut ultricies urna sed purus tristique rutrum. Vivamus rhoncus rutrum elit. Nulla vitae dictum leo",
        "created_date": "2020-02-23T20:01:13.653Z",
        "mood_type": 0,
        "author": {
            "first_name": "John",
            "last_name": "Doe",
            "avatar_url": "https://gravatar.com/avatar/54c91979efae1b4cab6f031fbe6a8903?s=400&d=robohash&r=x"
        }
    }
];
const Property = ({property}) => {
    return (
            <FlatList
                ListHeaderComponent={<Info property={property}/>}
                ListFooterComponent={<Add/>}
                data={DATA}
                extraData={property}
                renderItem={({item}) => <Comment item={item}/>}
                keyExtractor={(item) => item.id}
                style={styles.property}
            />
    );
};
const styles = StyleSheet.create({
    property:{
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    }
});
export default Property;
