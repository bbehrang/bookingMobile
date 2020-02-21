import React from "react";
import {View, Text, Stylesheet, StyleSheet} from "react-native";

const HomeScreen = () => {
 return (
  <View style={styles.container}>
      <Text>Welcome to booking</Text>
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
