import React, {useEffect, useState} from 'react';
import * as Font from 'expo-font';
import Loading from "./src/components/Common/Loading";
import NavigatorComponent from "./src/NavigatorComponent";
import {Provider} from "react-redux";
import store from "./src/store";




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
            <Provider store={store}>
              <NavigatorComponent/>
            </Provider>
        );
    } else return <Loading/>

};


export default App;
