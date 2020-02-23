import React, {useEffect} from "react";
import {View, Text, StyleSheet, Button} from "react-native";
import axios from 'axios';
import useApi from "../hooks/useApi";
const HomeScreen = () => {
    //const [get, results, error] = useApi();
    const makeRequest = async () => {
        try{
            const response = await axios.get("https://api.booking.knine.xyz/api/properties", {
                headers:{
                    accept: 'application/json'
                }

            });
            console.log(response);
        } catch (e) {
            console.log(e);
        }

    };

 return (
  <View style={styles.container}>
      <Button onPress={makeRequest} title='hello'/>
  </View>
 );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default HomeScreen;
