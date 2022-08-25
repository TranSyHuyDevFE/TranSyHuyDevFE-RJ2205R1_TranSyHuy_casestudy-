import { take, race, delay, put } from "redux-saga/effects";
import { fetchQuestionSuccess } from "../slices/game";
import { finnishGame } from "../slices/gameInit";
import { answerQuestion, nextQuestion } from "../slices/game";
function* answersSaga() {
  for (let i = 0; i < 15; i++) {
    yield take(answerQuestion.type);
    yield put(nextQuestion());
  }
}
export default function* gameSaga() {
  while (true) {
    yield take(fetchQuestionSuccess.type);
    yield race({
      delay: delay(60000),
      done: answersSaga(),
    });
    yield put(finnishGame());
  }
}
