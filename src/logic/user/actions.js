import { SIGN_IN, SIGN_OUT, SIGN_UP, UPDATE_USER } from "./actionTypes";

export function signInUser(login,password) {
    return {
        type: SIGN_IN,
        payload: { login,password }
    };
}

export function signOutUser() {
    return {
        type: SIGN_OUT
    };
}


export function signUpUser(login,password) {
    return {
        type: SIGN_UP,
        payload: { login,password }
    };
}

export function updateUser(arr){
    return{
        type: UPDATE_USER,
        payload:{arr}
    }
}