import React from 'react';
import {View, StyleSheet, Image, Text} from "react-native";
import Rating from "./Rating";

const Item = ({item}) => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.avatar}>
                    <Image source={{uri: item.author.avatar_url}} style={styles.avatarImage}/>
                </View>
                <View style={styles.info}>
                    <View style={{flexDirection:'row', justifyContent:'center'}}>
                        <Text style={styles.author}>{`${item.author.first_name} ${item.author.last_name}`}</Text>
                        <View style={{alignSelf:'flex-end'}}>
                            <Rating rating={item.mood_type}/>
                        </View>

                    </View>
                    <Text style={{flexBasis: '100%'}}>{item.created_date}</Text>
                    <Text>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                        deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                        provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
                        fuga. </Text>
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
        flexWrap: 'wrap',
    },
    avatar: {
        flex: 1,
    },
    avatarImage: {
        backgroundColor: "#C4C4C4",
        width: 50,
        height: 50,
        borderRadius: 50,
        resizeMode: 'contain',
        alignSelf: 'flex-start'
    },
    info: {
        flex:4,
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap'
    },
    author: {
        fontFamily: 'montserratBold',
        color: '#565454',
    },
    rating: {
        alignSelf: 'flex-end',
    }

});

export default Item;
