import {all, call, put, takeLatest} from "redux-saga/effects";
import {
    SIGN_IN,
    SIGN_IN_ERROR,
    SIGN_IN_SUCCESS,
    SIGN_UP,
    SIGN_UP_ERROR,
    SIGN_UP_FIRST_STEP, SIGN_UP_FIRST_STEP_ERROR, SIGN_UP_FIRST_STEP_SUCCESS,
    SIGN_UP_SUCCESS,
    SIGN_UP_VERIFY,
    SIGN_UP_VERIFY_ERROR,
    SIGN_UP_VERIFY_SUCCESS
} from "./actionTypes";
import Amplify, {Auth} from "aws-amplify";
import awsconfig from "../../../aws-exports";

function* signIn({payload}) {
    try {
        const response = yield call(Auth.signIn, payload);
        console.log(response);
        yield put({
            type: SIGN_IN_SUCCESS,
            payload: {
                firstName: response.firstName,
                lastName: response.lastName,
                userName: response.userName,
                authToken: response.authToken,

            }
        });
    } catch (err) {
        console.log(err);
        yield put({
            type: SIGN_IN_ERROR,
            payload: err
        });
    }
}

function* signUp({payload}) {
    try {
        const {fields} = payload;
        const {email : username, given_name, family_name, password} = fields;
        const response = yield call(
            [Auth, 'signUp'],
            {
                username: username.toLowerCase(),
                password,
                attributes:{
                    given_name,
                    family_name,
                }
            });
        if(response.code && response.message) //Sign up error response
            yield put({type: SIGN_UP_FIRST_STEP_ERROR, payload: {message: response.message}});
        else yield put({type: SIGN_UP_FIRST_STEP_SUCCESS, payload: response});
    } catch (e) {
        console.log(e);
        yield put({type: SIGN_UP_FIRST_STEP_ERROR, payload: e});
    }
}
function* verify({payload}){
    const {username, code} = payload;
    try{
        const response = yield call([Auth, 'confirmSignUp'], {username, code});
        console.log(response);
        yield put({type: SIGN_UP_VERIFY_SUCCESS, payload: response});
    } catch (e) {
        console.log(e);
        yield put({type: SIGN_UP_VERIFY_ERROR, payload: e});
    }
}


export default function* userSaga() {
    yield all([takeLatest(SIGN_IN, signIn), takeLatest(SIGN_UP_FIRST_STEP, signUp), takeLatest(SIGN_UP_VERIFY, verify)]);
}
