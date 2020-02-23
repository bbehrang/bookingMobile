import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import PropertyListScreen from "./src/screens/PropertyListScreen";
import PropertyScreen from "./src/screens/PropertyScreen";

const navigator = createStackNavigator(
    {
        Home: HomeScreen,
        Property: PropertyScreen,
        PropertyList: PropertyListScreen,
    },
    {
        initialRouteName: "PropertyList",
        defaultNavigationOptions: {
            title: "App"
        }
    }
);

export default createAppContainer(navigator);
