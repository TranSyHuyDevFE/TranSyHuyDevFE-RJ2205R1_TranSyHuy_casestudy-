import { put, takeLatest } from "redux-saga/effects";
import * as stages from "../../utils/constants";
import { loginGame } from "../slices/loginInit";
import Swal from "sweetalert2";

function* authSagaFun(action) {
  const Alert = () => {
    let timerInterval;
    Swal.fire({
      icon: "success",
      title: "Login Success!",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        timerInterval = setInterval(() => {
          Swal.getTimerLeft();
        }, 1000);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  };
  const AlertLoginFail = () => {
    Swal.fire({
      icon: "error",
      text: "Password or Username are incorrect",
      footer: "Try again or ask your teacher!",
    });
  };

  const userLogged_in = action.payload;
  if (userLogged_in.username === "syhuy" && userLogged_in.password === "123") {
    Alert();
    yield put(loginGame({ userLogged_in }));
  } else {
    AlertLoginFail();
  }
}
export default function* rootSaga() {
  yield takeLatest(stages.LOGIN, authSagaFun);
}
