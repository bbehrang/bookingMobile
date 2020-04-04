import {defaultState} from "../defaultState";
import {FETCH_PROPERTIES, FETCH_PROPERTIES_SUCCESS, FETCH_PROPERTIES_ERROR} from "./actionTypes";
import produce from "immer";
export default function propertiesReducer(state = defaultState.properties, action){
    return produce(state, draft => {
        switch (action.type) {
            case FETCH_PROPERTIES:{
                return draft
            }
            case FETCH_PROPERTIES_SUCCESS:{
                    draft = action.payload;
                    return draft;
            }
            case FETCH_PROPERTIES_ERROR: {
                return draft;
            }
            default: {
                return draft;
            }
        }
    });

}
