import {defaultState} from "../defaultState";
import {
    FETCH_COMMENTS,
    FETCH_COMMENTS_ERROR,
    FETCH_COMMENTS_SUCCESS,
    FETCH_PROPERTY,
    FETCH_PROPERTY_ERROR,
    FETCH_PROPERTY_SUCCESS
} from "./actionTypes";
import produce from "immer";

export default function commentsReducer(state = defaultState.comments, action) {
    console.log(action.type);
    return produce(state, draft => {
        switch (action.type) {
            case FETCH_COMMENTS: {
                draft.isLoading = true;
                break;
            }
            case FETCH_COMMENTS_SUCCESS: {
                draft.isLoading = false;
                draft.items = action.payload;
                draft.errors = null;
                break;
            }
            case FETCH_COMMENTS_ERROR: {
                draft.isLoading = false;
                draft.errors = action.payload;
                break;
            }
        }
    });

}
