import {FETCH_COMMENTS, ADD_COMMENT} from "./actionTypes";

export function fetchPropertyComments(id){
    return {
        type: FETCH_COMMENTS,
        payload: id
    }
}
export function addPropertyComments(id){
    return {
        type: ADD_COMMENT,
        payload: id
    }
}

