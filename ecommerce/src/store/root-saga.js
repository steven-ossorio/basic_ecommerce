// Incapsulate all the sagas in one location

import { all, call } from "redux-saga/effects";
import { categoriesSaga } from "./categories/category.saga";
import { userSagas } from "./user/user.saga";

// Generator function
export function* rootSaga() {
  yield all([call(categoriesSaga), call(userSagas)]);
}
