import {defaultState} from "../defaultState";
import {
    SIGN_IN,
    SIGN_IN_SUCCESS,
    SIGN_IN_ERROR,
    SIGN_OUT,
    SIGN_OUT_SUCCESS,
    SIGN_OUT_ERROR,
    SIGN_UP_FIRST_STEP,
    SIGN_UP_FIRST_STEP_SUCCESS,
    SIGN_UP_FIRST_STEP_ERROR,
    UPDATE_USER,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR, SIGN_UP_VERIFY, SIGN_UP_VERIFY_SUCCESS, SIGN_UP_VERIFY_ERROR, HIDE_USER_ERROR,

} from "./actionTypes";
import produce from "immer";

export default function userReducer(state = defaultState.user, action) {
    console.log(action.type);
    return produce(state, draft => {
        switch (action.type) {
            case SIGN_IN:{
                draft.isLoading = true;
                break;
            }
            case SIGN_IN_SUCCESS:{
                draft.isLoading = false;
                break;
            }
            case SIGN_IN_ERROR:{
                draft.isLoading = false;
                draft.errors = action.payload;
                break;
            }
            case SIGN_UP_FIRST_STEP:{
                draft.isLoading = true;
                draft.wasRegistered = false;
                break;
            }
            case SIGN_UP_FIRST_STEP_SUCCESS:{
                draft.isLoading = false;
                draft.errors = null;
                draft.profile = action.payload;
                break;
            }
            case SIGN_UP_FIRST_STEP_ERROR: {
                draft.isLoading = false;
                draft.errors = action.payload;
                break;
            }
            case SIGN_UP_VERIFY:{
                draft.isLoading = true;
                draft.wasRegistered = false;
                break;
            }
            case SIGN_UP_VERIFY_SUCCESS:{
                draft.isLoading = false;
                draft.errors = null;
                draft.profile = action.payload;
                break;
            }
            case SIGN_UP_VERIFY_ERROR: {
                draft.isLoading = false;
                draft.errors = action.payload;
                break;
            }
            case HIDE_USER_ERROR:{
                draft.errors = null;
                break;
            }

        }
    });
}
