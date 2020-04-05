import {call, put, takeLatest, all} from "redux-saga/effects";
import Api from '../../services/Api';
import {
    FETCH_COMMENTS,
    FETCH_COMMENTS_ERROR,
    FETCH_COMMENTS_SUCCESS,
    ADD_COMMENT,
    ADD_COMMENT_ERROR,
    ADD_COMMENT_SUCCESS
} from "./actionTypes";

function* fetchPropertyComments({payload}){
    try{
        const comments = yield yield call(Api.sendRequest, `/properties/${payload}/comments`, `get`);
        yield put({type: FETCH_COMMENTS_SUCCESS, payload: comments.data});
    }
    catch (e) {
        yield put({type:FETCH_COMMENTS_ERROR, payload: e});
    }
}

export default function* commentsSaga() {
    yield takeLatest(FETCH_COMMENTS, fetchPropertyComments);
}
