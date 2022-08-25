import { put, takeLatest } from "redux-saga/effects";
import * as stages from "../../utils/constants";
import { loginGame } from "../slices/loginInit";

function* authSagaFun(action) {
  const userLogged_in = action.payload;
  if (userLogged_in.username === "syhuy" && userLogged_in.password === "123") {
    yield put(loginGame({ userLogged_in }));
  } else {
  }
}
export default function* rootSaga() {
  yield takeLatest(stages.LOGIN, authSagaFun);
}
