import React, {useState} from 'react';
import Item from "./Item";
import {FlatList, Platform, StatusBar, StyleSheet, TouchableOpacity, View} from "react-native";
import ThemeButton from "../Common/ThemeButton";
import Header from "../Header/Header";

const DATA = {
    "total": 10,
    "items": [
        {
            "id": '1',
            "name": "Name 1",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a aliquam dolor, non aliquam metus. Aenean vel nisi quis mauris tincidunt elementum. In congue dolor in iaculis lobortis. Nullam facilisis massa dui, quis laoreet nisi vehicula at. Nulla in sapien eu arcu consequat facilisis. Ut ultricies urna sed purus tristique rutrum. Vivamus rhoncus rutrum elit. Nulla vitae dictum leo.\n" +
                "\n" +
                "Nullam a sapien condimentum, aliquam turpis sit amet, hendrerit velit. Donec vulputate massa a risus imperdiet iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi finibus, erat eu hendrerit egestas, libero turpis porta ligula, quis lacinia massa quam at enim. Ut suscipit ut mauris eu blandit. Quisque vitae porta est. Nulla convallis sem eu pharetra suscipit. In placerat felis eget leo rhoncus, non feugiat est molestie. Proin leo felis, rhoncus sit amet semper eu, efficitur quis dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc ultricies blandit diam, non laoreet quam iaculis sit amet. Sed nec lobortis nisl, sed tempor quam. Ut eget urna molestie, tempor nisi at, viverra ipsum. Sed placerat, quam vitae malesuada tristique, tellus nulla condimentum eros, et posuere risus eros vitae ipsum.",
            "cover_image_url": "https://q-cf.bstatic.com/images/hotel/max1024x768/239/239056040.jpg"
        },
        {
            "id": '2',
            "name": "Name 1",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a aliquam dolor, non aliquam metus. Aenean vel nisi quis mauris tincidunt elementum. In congue dolor in iaculis lobortis. Nullam facilisis massa dui, quis laoreet nisi vehicula at. Nulla in sapien eu arcu consequat facilisis. Ut ultricies urna sed purus tristique rutrum. Vivamus rhoncus rutrum elit. Nulla vitae dictum leo.\n" +
                "\n" +
                "Nullam a sapien consdimentum, aliquam turpis sit amet, hendrerit velit. Donec vulputate massa a risus imperdiet iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi finibus, erat eu hendrerit egestas, libero turpis porta ligula, quis lacinia massa quam at enim. Ut suscipit ut mauris eu blandit. Quisque vitae porta est. Nulla convallis sem eu pharetra suscipit. In placerat felis eget leo rhoncus, non feugiat est molestie. Proin leo felis, rhoncus sit amet semper eu, efficitur quis dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc ultricies blandit diam, non laoreet quam iaculis sit amet. Sed nec lobortis nisl, sed tempor quam. Ut eget urna molestie, tempor nisi at, viverra ipsum. Sed placerat, quam vitae malesuada tristique, tellus nulla condimentum eros, et posuere risus eros vitae ipsum.",
            "cover_image_url": "https://q-cf.bstatic.com/images/hotel/max1024x768/239/239056040.jpg"
        },
        {
            "id": '3',
            "name": "Name 1",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a aliquam dolor, non aliquam metus. Aenean vel nisi quis mauris tincidunt elementum. In congue dolor in iaculis lobortis. Nullam facilisis massa dui, quis laoreet nisi vehicula at. Nulla in sapien eu arcu consequat facilisis. Ut ultricies urna sed purus tristique rutrum. Vivamus rhoncus rutrum elit. Nulla vitae dictum leo.\n" +
                "\n" +
                "Nullam a sapien condimentum, aliquam turpis sit amet, hendrerit velit. Donec vulputate massa a risus imperdiet iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi finibus, erat eu hendrerit egestas, libero turpis porta ligula, quis lacinia massa quam at enim. Ut suscipit ut mauris eu blandit. Quisque vitae porta est. Nulla convallis sem eu pharetra suscipit. In placerat felis eget leo rhoncus, non feugiat est molestie. Proin leo felis, rhoncus sit amet semper eu, efficitur quis dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc ultricies blandit diam, non laoreet quam iaculis sit amet. Sed nec lobortis nisl, sed tempor quam. Ut eget urna molestie, tempor nisi at, viverra ipsum. Sed placerat, quam vitae malesuada tristique, tellus nulla condimentum eros, et posuere risus eros vitae ipsum.",
            "cover_image_url": "https://q-cf.bstatic.com/images/hotel/max1024x768/239/239056040.jpg"
        },
        {
            "id": '4',
            "name": "Name 1",
            "description": "Lsorem ipsuzcm dolor sit amet, consectetur adipiscing elit. Vivamus a aliquam dolor, non aliquam metus. Aenean vel nisi quis mauris tincidunt elementum. In congue dolor in iaculis lobortis. Nullam facilisis massa dui, quis laoreet nisi vehicula at. Nulla in sapien eu arcu consequat facilisis. Ut ultricies urna sed purus tristique rutrum. Vivamus rhoncus rutrum elit. Nulla vitae dictum leo.\n" +
                "\n" +
                "Nullam a sapien condimentum, aliquam turpis sit amet, hendrerit velit. Donec vulputate massa a risus imperdiet iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi finibus, erat eu hendrerit egestas, libero turpis porta ligula, quis lacinia massa quam at enim. Ut suscipit ut mauris eu blandit. Quisque vitae porta est. Nulla convallis sem eu pharetra suscipit. In placerat felis eget leo rhoncus, non feugiat est molestie. Proin leo felis, rhoncus sit amet semper eu, efficitur quis dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc ultricies blandit diam, non laoreet quam iaculis sit amet. Sed nec lobortis nisl, sed tempor quam. Ut eget urna molestie, tempor nisi at, viverra ipsum. Sed placerat, quam vitae malesuada tristique, tellus nulla condimentum eros, et posuere risus eros vitae ipsum.",
            "cover_image_url": "https://q-cf.bstatic.com/images/hotel/max1024x768/239/239056040.jpg"
        }
    ]

};


const List = ({navigation}) => {
    const [toShow, setToShow] = useState(2);

    const handlePress = () => {
        setToShow(toShow + 4);
    };
    if (DATA) {
        return (
                <FlatList style={styles.list}
                          data={DATA.items}
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

    }
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
        borderRadius:140
    }
});

export default List;
