import { all, fork } from "redux-saga/effects";

import propertiesSaga from "./properties/saga";
import propertySaga from "./property/saga";
import commentsSaga from "./comments/saga";

export default function* rootSaga() {
    yield all([fork(propertiesSaga), fork(propertySaga), fork(commentsSaga)]);
}
