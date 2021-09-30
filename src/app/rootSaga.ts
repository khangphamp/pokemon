import { all } from "redux-saga/effects";
import CardSaga from "../features/Card/CardSaga";
import ModeSaga from "../features/Mode/ModeSaga";
import StartSaga from "../features/startGame/startGameSaga";

export default function* rootSaga() {
    yield all([
      CardSaga(),
      StartSaga(),
      ModeSaga(),
    ])
    // code after all-effect
  }