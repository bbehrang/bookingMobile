import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity} from "react-native";

const Body = ({body}) => {
    const [isFullTextHidden, setTextHidden] = useState(true);
    useEffect(() => {
        setTextHidden(true);
    }, [body]);
    if(body){
        return (
            <TouchableOpacity onPress={() => setTextHidden(!isFullTextHidden)} activeOpacity={0.8}>
                <Text style={{fontFamily: 'montserratMed', fontSize: 13, lineHeight: 20}}>
                    {isFullTextHidden ? body.substring(0, 100) + "..." : body}
                </Text>
            </TouchableOpacity>
        );
    }
    else return <Text>Something went wrong while loading this comment</Text>

};

export default Body;
