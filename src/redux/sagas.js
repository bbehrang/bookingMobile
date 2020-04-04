import { all, fork } from "redux-saga/effects";

import userSaga from "./user/saga"
import fontSaga from "./font/saga";
import propertiesSaga from "./properties/saga";

export default function* rootSaga() {
    yield all([fork(propertiesSaga)]);
}
