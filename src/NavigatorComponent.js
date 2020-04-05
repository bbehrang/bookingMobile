import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";

import SignInScreen from "./screens/authorization/SignInScreen";
import SignUpScreenFirst from "./screens/authorization/SignUpScreenFirst";
import SignUpScreenSecond from "./screens/authorization/SignUpScreenSecond";

import HomeScreen from "./screens/HomeScreen";
import PropertiesScreen from "./screens/PropertiesScreen";
import PropertyScreen from "./screens/PropertyScreen";

const Tab = createBottomTabNavigator();
const AppStack = createStackNavigator();
const PropertyStack = createStackNavigator();
const PropertiesNavigator = () => {
    return (
        <PropertyStack.Navigator initialRouteName="Properties" headerMode='none'>
            <PropertyStack.Screen name="Properties" component={PropertiesScreen}/>
            <PropertyStack.Screen name="Property" component={PropertyScreen}/>
        </PropertyStack.Navigator>
    );
};

const BottomTabNavigator = () => {
        return (
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
                    keyboardHidesTabBar: true,
                }}
            >
                <Tab.Screen name="Search" component={PropertiesNavigator}/>
                <Tab.Screen name="Reservations" component={PropertiesScreen}/>
                <Tab.Screen name="Profile" component={HomeScreen}/>
                <Tab.Screen name="More" component={HomeScreen}/>
            </Tab.Navigator>
        )
};


const NavigatorComponent = (props) => {
        return (
            <NavigationContainer>
                <AppStack.Navigator initialRouteName="SignInScreen" headerMode='none'>
                    {
                        props.authToken === '' ? (
                            <>
                                <AppStack.Screen
                                    name="SignInScreen"
                                    component={SignInScreen}
                                />
                                <AppStack.Screen
                                    name="SignUpScreenFirst"
                                    component={SignUpScreenFirst}
                                />
                                <AppStack.Screen
                                    name="SignUpScreenSecond"
                                    component={SignUpScreenSecond}
                                />
                            </>
                        ) : (
                            <AppStack.Screen
                                name="HomeNav"
                                component={BottomTabNavigator}/>
                        )
                    }
                </AppStack.Navigator>
            </NavigationContainer>
        );
};

export default NavigatorComponent;


