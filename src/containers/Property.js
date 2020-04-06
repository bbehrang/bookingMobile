import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchProperty} from '../redux/property/actions';
import PropertyKeyboardView from "../components/Property/PropertyKeyboardView";
import Loading from "../components/Common/Loading";
import {fetchPropertyComments} from "../redux/comments/actions";
const Property = ({property}) => {
    const {id} = property;
    const {isLoading, errors, item} = useSelector(state => state.property);
    const comments = useSelector(state => state.comments);
    const dispatch = useDispatch();
    useEffect(() => {
        if(item){
            if((item.id !== id) || errors || comments.errors){
                dispatch(fetchProperty(id));
                dispatch(fetchPropertyComments(id));
            }
        }
        else{
            dispatch(fetchProperty(id));
            dispatch(fetchPropertyComments(id));
        }
    },[id]);
    if(item && (item.id !== id)){ //prevents property screen flicker before loading a new one
        return <Loading/>;
    }
    return (
        <PropertyKeyboardView isLoading={isLoading}
                              errors={errors}
                              property={item}
                              comments={comments}/>
    );
};

export default Property;
