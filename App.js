import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from "./src/screens/HomeScreen";
import PropertyScreen from "./src/screens/PropertyScreen";
import PropertiesScreen from "./src/screens/PropertiesScreen";
import {Ionicons} from '@expo/vector-icons';
import * as Font from 'expo-font';
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Loading from "./src/components/Common/Loading";
import  {PropertiesProvider} from "./src/context/PropertiesContext";

const Tab = createBottomTabNavigator();
const PropertyStack = createStackNavigator();

const PropertiesNavigator = () => {
    return (
        <PropertyStack.Navigator initialRouteName="Properties" headerMode='none'>
            <PropertyStack.Screen name="Properties" component={PropertiesScreen}/>
            <PropertyStack.Screen name="Property" component={PropertyScreen}/>
        </PropertyStack.Navigator>
    );
};

const App = () => {
    const [isFontLoaded, setIsFontLoaded] = useState(false);
    useEffect(() => {
        Font.loadAsync({
            montserratMed: require('./assets/fonts/Montserrat-Medium.ttf'),
            montserratBold: require('./assets/fonts/Montserrat-SemiBold.ttf')
        }).then(() => setIsFontLoaded(true)).catch(e => console.log(e));
    }, []);
    if (isFontLoaded) {
        return (
            <PropertiesProvider>
                <NavigationContainer>
                    <Tab.Navigator
                        initialRouteName="Search"
                        screenOptions={({route}) => ({
                            tabBarIcon: ({focused, color, size}) => {
                                let iconName;
                                if (route.name === 'Search') {
                                    iconName = 'ios-search'
                                } else if (route.name === 'Reservations') {
                                    iconName = 'ios-calendar'
                                } else if (route.name === 'Profile') {
                                    iconName = 'ios-person'
                                } else if (route.name === 'More') {
                                    iconName = 'ios-more'
                                }
                                // You can return any component that you like here!
                                return <Ionicons name={iconName} size={size} color={color}/>;
                            },
                        })}
                        tabBarOptions={{
                            activeTintColor: 'white',
                            inactiveTintColor: '#303030',
                            style: {backgroundColor: '#39A298', borderTopColor: 'white'},
                            labelStyle: {fontFamily: 'montserratBold'},
                            keyboardHidesTabBar: true,
                        }}

                    >
                        <Tab.Screen name="Search" component={PropertiesNavigator}/>
                        <Tab.Screen name="Reservations" component={HomeScreen}/>
                        <Tab.Screen name="Profile" component={PropertiesScreen}/>
                        <Tab.Screen name="More" component={PropertiesScreen}/>
                    </Tab.Navigator>
                </NavigationContainer>
            </PropertiesProvider>

    )
        ;
    } else return <Loading/>

};
export default App;
