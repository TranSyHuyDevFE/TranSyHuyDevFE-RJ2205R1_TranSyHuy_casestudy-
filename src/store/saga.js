import { all } from "redux-saga/effects";
import startGame from "./saga/gameInit";
import game from "./saga/game";
import login from "./saga/login";
export default function* rootSaga() {
  yield all([startGame(), game(), login()]);
}
