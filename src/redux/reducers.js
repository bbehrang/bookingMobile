import { combineReducers } from "redux";
import user from "./user/reducer"
import font from "./font/reducer";
import properties from "./properties/reducer";
export default combineReducers({
    font,
    properties,
});
