import React, {useState} from 'react';
import Item from "./Item";
import {FlatList, StyleSheet, TouchableOpacity} from "react-native";
import {withNavigation} from "react-navigation";
import ThemeButton from "../Common/ThemeButton";

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
            <>
                <FlatList style={styles.list}
                          data={DATA.items}
                          keyExtractor={item => item.id}
                          renderItem={({item}) =>
                              <TouchableOpacity style={styles.item}
                                                onPress={() =>
                                                    navigation.navigate('Property', {item: item})}>
                                  <Item item={item}/>
                              </TouchableOpacity>}
                          ListFooterComponent={DATA.items.length > toShow ?
                              <ThemeButton title="View more" pressHandler={handlePress}/>
                              : null}
                />
            </>
        );

    }
};

const styles = StyleSheet.create({
    list: {
        marginVertical: 10
    },
    item: {
        height: 150,
        flex: 1,
        flexDirection: 'row',
        marginVertical: 10,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10

    }
});

export default withNavigation(List);
