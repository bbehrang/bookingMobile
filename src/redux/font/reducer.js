import produce from "immer";
import {
    FONT_LOAD
} from "./actionTypes";
import {defaultState} from "../defaultState";

export default function fontReducer(state = defaultState.font, action) {
    switch (action.type) {
        case FONT_LOAD: {
            return produce(state, draft => {
                draft = action.payload === 'boolean' ? action.payload : state;
            });
        }
        default:
            {
            return {
                state
            };
        }
    }
}
