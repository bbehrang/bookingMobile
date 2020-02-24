import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, Text} from "react-native";
import Rating from "./Rating";
import Body from './Body';
import Add from "./Add";

const Item = ({item}) => {
    const [date, setDate] = useState(item.created_date);
    useEffect(() => {
        const formattedDate = new Date(date);
        setDate(date.substring(0, 10));
    }, [item]);
    return (
        <>

            <View style={styles.container}>
                <View style={styles.avatar}>
                    <Image source={{uri: item.author.avatar_url}} style={styles.avatarImage}/>
                </View>
                <View style={styles.info}>
                    <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
                        <View style={{flex: 1}}>
                            <Text style={styles.author}>{`${item.author.first_name} ${item.author.last_name}`}</Text>
                        </View>
                        <View style={{flex: 1, alignSelf:'flex-end'}}>
                            <Rating rating={item.mood_type}/>
                        </View>

                    </View>
                    <Text style={styles.date}>{date}</Text>
                    <Body body={item.text} />
                </View>

            </View>
        </>

    );
};
const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 10,
        flexWrap: 'wrap',
    },
    avatar: {
        width:50,
        height: 50,
        backgroundColor: "#C4C4C4",
        borderRadius: 40

    },
    avatarImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
        resizeMode: 'contain',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    info: {
        flex:4,
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        marginLeft: 10
    },
    author: {
        fontFamily: 'montserratBold',
        color: '#565454',
    },
    rating: {
        alignSelf: 'flex-end',
    },
    date:{
        fontFamily: 'montserratMed',
        fontSize: 12,
        color: '#8C8C8C'
    }

});

export default Item;
