import {HIDE_USER_ERROR, SIGN_IN, SIGN_OUT, SIGN_UP, SIGN_UP_FIRST_STEP, SIGN_UP_VERIFY} from "./actionTypes";

export function signInUser(email,password) {
    return {
        type: SIGN_IN,
        payload: { email,password }
    };
}

export function signOutUser() {
    return {
        type: SIGN_OUT
    };
}

export function hideUserError() {
    return {
        type: HIDE_USER_ERROR
    }
}
export function signUpUser(fields) {
    return {
        type: SIGN_UP_FIRST_STEP,
        payload: { fields }
    };
}
export function verifyUser(username, code) {
    return {
        type: SIGN_UP_VERIFY,
        payload: {username, code}
    };
}
export function resendVerificationCode(username){
    return {
        type: SIGN_UP_RESEND_CODE,
        payload: username
    };
}
export function updateUser(arr){
    return{
        type: UPDATE_USER,
        payload:{arr}
    }
}
