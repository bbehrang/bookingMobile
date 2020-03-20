import { put, all, takeLatest } from "redux-saga/effects";
import { call } from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import api from "../../services/Api";

function* signInUser(action) {
    try {
        const response = yield call(api.sendRequest, "api/user?login="+action.payload.login+"&password="+action.payload.password, "get");
       //  let response={
       //      firstName:"Olga",
       //      lastName:"Yashan",
       //      userName:"olgayashan",
       //      authToken:""
       //  };
        yield put({
            type: actionTypes.SIGN_IN_SUCCESS,
            payload: {
                firstName: response.firstName,
                lastName: response.lastName,
                userName: response.userName,
                authToken: response.authToken,

            }
        });
    } catch (err) {
        yield put({
            type: actionTypes.SIGN_IN_ERROR,
            payload: {
                error: err.response.data
            }
        });
    }
}

function* signUpUser(action) {
    console.log(action.payload);
    try {
        const response = yield call(api.sendRequest, "api/user/", "post",action.payload);
        yield put({
            type: actionTypes.SIGN_UP_SUCCESS,
            payload: {
                user: response.data
            }
        });
    } catch (err) {
        yield put({
            type: actionTypes.SIGN_UP_ERROR,
            payload: {
                error: err.response.data
            }
        });
    }
}

function* signOutUser(action) {
    console.log(action.payload);
    try {
        const response = yield call(api.sendRequest, "api/user/", "post",action.payload);
        yield put({
            type: actionTypes.SIGN_OUT_SUCCESS,
            payload: {
                user: response.data
            }
        });
    } catch (err) {
        yield put({
            type: actionTypes.SIGN_OUT_ERROR,
            payload: {
                error: err.response.data
            }
        });
    }
}


function* updateUser(action) {
    try {
        console.log(action.payload.arr);
        const response = yield call(api.sendRequest, "api/user/products?login="+action.payload.arr.login+"&password="+action.payload.arr.password, "put", action.payload.arr);
        yield put({
            type: actionTypes.UPDATE_USER_SUCCESS,
            payload: {
                user: response.data
            }
        });
    } catch (err) {
        yield put({
            type: actionTypes.UPDATE_USER_ERROR,
            payload: {
                error: err.response.data
            }
        });
    }
}

export default function* userSaga() {
    yield all([takeLatest(actionTypes.SIGN_IN, signInUser),takeLatest(actionTypes.UPDATE_USER, updateUser),takeLatest(actionTypes.SIGN_UP, signUpUser),takeLatest(actionTypes.SIGN_OUT, signOutUser)]);
}