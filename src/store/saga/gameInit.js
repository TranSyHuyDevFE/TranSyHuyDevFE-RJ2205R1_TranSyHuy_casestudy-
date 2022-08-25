import { take, fork, put, call, delay, cancel } from "redux-saga/effects";
import { startGame, cancelGame } from "../slices/gameInit";
import { fetchQuizFromApi } from "../../utils/api";
import { fetchQuestionSuccess, fetchQuestionFail } from "../slices/game";
function* fetchQuestionSaga() {
  try {
    yield delay(1000);
    const data = yield call(fetchQuizFromApi);
    yield put(fetchQuestionSuccess(data));
  } catch (err) {
    yield put(fetchQuestionFail("There was an error fetching the question"));
  }
}
function* cancelFetchQuiz(forkedSaga) {
  while (true) {
    yield take(cancelGame.type);
    yield cancel(forkedSaga);
  }
}
export default function* startGameSaga() {
  while (true) {
    yield take(startGame.type);
    const forkedSaga = yield fork(fetchQuestionSaga);
    yield fork(cancelFetchQuiz, forkedSaga);
  }
}
