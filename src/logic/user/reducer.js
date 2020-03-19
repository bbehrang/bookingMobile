import defaultState from "../defaultState";
import {
    SIGN_IN,
    SIGN_IN_SUCCESS,
    SIGN_IN_ERROR,
    SIGN_OUT,
    SIGN_OUT_SUCCESS,
    SIGN_OUT_ERROR,
    SIGN_UP,
    SIGN_UP_SUCCESS,
    SIGN_UP_ERROR,
    UPDATE_USER,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR,

} from "./actionTypes";

export default function userReducer(state = defaultState.user, action) {
    switch (action.type) {
        case SIGN_IN: {
            return {
                ...state,
                loading: true
            };
        }
        case SIGN_IN_SUCCESS: {
            return {
                ...state,
                authToken: action.payload.authToken,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                userName: action.payload.userName,
                loading: false,
                error: false
            };
        }
        case SIGN_IN_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        }
        case SIGN_OUT: {
            return {
                ...state,
                loading: true
            };
        }
        case SIGN_OUT_SUCCESS: {
            return {
                ...state,
                authToken: action.payload.authToken,
                loading: false
            };
        }
        case SIGN_OUT_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        }
        case SIGN_UP: {
            return {
                ...state,
                loading: true
            };
        }
        case SIGN_UP_SUCCESS: {
            return {
                ...state,
                authToken: action.payload.authToken,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                userName: action.payload.userName,
                loading: false
            };
        }
        case SIGN_UP_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        }
        case UPDATE_USER: {
            return {
                ...state,
                loading: true
            };
        }
        case UPDATE_USER_SUCCESS: {
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                userName: action.payload.userName,
                loading: false
            };
        }
        case UPDATE_USER_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        }
        default:
        {
            return {
                ...state
            };
        }
    }
}