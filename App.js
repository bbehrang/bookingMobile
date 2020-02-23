import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import PropertyListScreen from "./src/screens/PropertyListScreen";

const navigator = createStackNavigator(
    {
        Home: HomeScreen,
        PropertyList: PropertyListScreen
    },
    {
        initialRouteName: "PropertyList",
        defaultNavigationOptions: {
            title: "App"
        }
    }
);

export default createAppContainer(navigator);
