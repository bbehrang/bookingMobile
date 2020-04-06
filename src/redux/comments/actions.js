import {FETCH_COMMENTS, ADD_COMMENT} from "./actionTypes";

export function fetchPropertyComments(id){
    return {
        type: FETCH_COMMENTS,
        payload: id
    }
}
export function addPropertyComment(id, data){
    return {
        type: ADD_COMMENT,
        payload: { id, data}
    }
}

