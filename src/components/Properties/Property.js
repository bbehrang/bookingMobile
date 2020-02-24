import React from 'react';
import {FlatList} from "react-native";
import Info from "./Info";
import Item from "./Comments/Item";

const DATA = [
    {
        "id": "1",
        "text": "string",
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
            data={DATA}
            renderItem={({item}) => <Item item={item}/>}
            keyExtractor={(item) => item.id}
        />
    );
};

export default Property;
