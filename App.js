import React, {useEffect, useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from "./src/screens/HomeScreen";
import PropertyScreen from "./src/screens/PropertyScreen";
import PropertiesScreen from "./src/screens/PropertiesScreen";
import * as Font from 'expo-font';
import {Text, View} from "react-native";

const Drawer = createDrawerNavigator();
const App = props => {
    const [isFontLoaded, setIsFontLoaded] = useState(false);
    useEffect(() => {
        Font.loadAsync({
             montserratMed: require('./assets/fonts/Montserrat-Medium.ttf'),
             montserratBold: require('./assets/fonts/Montserrat-SemiBold.ttf')
        }).then(() => setIsFontLoaded(true)).catch(e => console.log(e));
    }, []);
    if (isFontLoaded) {
        return (
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Properties">
                    <Drawer.Screen name="Home" component={HomeScreen}/>
                    <Drawer.Screen name="Properties" component={PropertiesScreen}/>
                    <Drawer.Screen name="Property" component={PropertyScreen}/>
                </Drawer.Navigator>
            </NavigationContainer>
        );
    } else return <View><Text>Loading</Text></View>

};
export default App;
