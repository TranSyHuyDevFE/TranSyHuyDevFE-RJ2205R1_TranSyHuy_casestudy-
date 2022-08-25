import { put, takeLatest } from "redux-saga/effects";
import * as stages from "../../utils/constants";
import { loginGame } from "../slices/loginInit";
import swal from "sweetalert";
function* authSagaFun(action) {
  const userLogged_in = action.payload;
  if (userLogged_in.username === "syhuy" && userLogged_in.password === "123") {
    swal("Hello!", {
      buttons: false,
      icon: "success",
      timer: 2000,
    });
    yield put(loginGame({ userLogged_in }));
  } else {
    swal("Wrong Password or Username!", {
      title: "Ask your teacher",
      icon: "warning",
      closeOnEsc: false,
    });
  }
}
export default function* rootSaga() {
  yield takeLatest(stages.LOGIN, authSagaFun);
}
