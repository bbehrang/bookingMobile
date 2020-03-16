import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { withAuthenticator } from 'aws-amplify-react-native';
import SignUp from './src/components/Register/Register';
import HomeScreen from "./src/screens/HomeScreen";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreenFirst from "./src/screens/SignUpScreenFirst";
import SignUpScreenSecond from "./src/screens/SignUpScreenSecond";
import PropertyScreen from "./src/screens/PropertyScreen";
import PropertiesScreen from "./src/screens/PropertiesScreen";
import {Ionicons} from '@expo/vector-icons';
import * as Font from 'expo-font';
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Loading from "./src/components/Common/Loading";
import  {PropertiesProvider} from "./src/context/PropertiesContext";
import ProfileScreen from "./src/screens/ProfileScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import VerificationScreen from "./src/screens/VerficationScreen";
import LoginScreen from "./src/screens/LoginScreen";
const Tab = createBottomTabNavigator();
const PropertyStack = createStackNavigator();
const RegisterStack = createStackNavigator();

const PropertiesNavigator = () => {
    return (
        <PropertyStack.Navigator initialRouteName="Properties" headerMode='none'>
            <PropertyStack.Screen name="Properties" component={PropertiesScreen}/>
            <PropertyStack.Screen name="Property" component={PropertyScreen}/>
        </PropertyStack.Navigator>
    );
};
const RegisterNavigator = () => {
    return (
        <RegisterStack.Navigator initialRouteName="Register" headerMode='none'>
            <RegisterStack.Screen name="Register" component={RegisterScreen}/>
            <RegisterStack.Screen name="Verify" component={VerificationScreen}/>
        </RegisterStack.Navigator>
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
                        initialRouteName="Reservations"
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
                        <Tab.Screen name="Reservations" component={RegisterNavigator}/>
                        <Tab.Screen name="Profile" component={ProfileScreen}/>

                        <Tab.Screen name="More" component={LoginScreen}/>
                    </Tab.Navigator>
                </NavigationContainer>
            </PropertiesProvider>

    )
        ;
    } else return <Loading/>

};
const signUpConfig = {
    header: 'My Customized Sign Up',
    hideAllDefaults: true,
    defaultCountryCode: '1',
    signUpFields: [
        {
            label: 'Email',
            key: 'email',
            required: true,
            displayOrder: 1,
            type: 'string'
        },
        {
            label: 'Password',
            key: 'password',
            required: true,
            displayOrder:2,
            type: 'password'
        },
        {
            label: 'name',
            key: 'given_name',
            required: true,
            displayOrder: 3,
            type: 'string'
        },
        {
            label: 'surname',
            key: 'family_name',
            required: true,
            displayOrder: 4,
            type: 'string'
        }
    ]
};
const usernameAttributes = 'email';

/*export default withAuthenticator(App, {
    signUpConfig,
    usernameAttributes
});*/
export default App;
