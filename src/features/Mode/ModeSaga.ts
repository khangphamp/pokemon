import { delay, takeLeading } from "@redux-saga/core/effects";
import { put } from "redux-saga/effects";
import { setAllCardDelete } from "../Card/Card";
import { CloseLoading, OpenLoading } from "../Loading/Loanding";
import { newMode, playAgain } from "./Mode";
import { ended } from "../startGame/startGame";

function * handleMode (){
    yield put(newMode());
    yield put(OpenLoading());
    yield delay(500);
    yield put(CloseLoading());
    
}
function * handleAgain(){
    yield put(ended());
    yield put(playAgain());
    yield put(setAllCardDelete())
}
function* ModeSaga () {
    yield takeLeading('CONTINUE',handleMode)
    yield takeLeading('PLAY_AGAIN_GAME',handleAgain)
}
export default ModeSaga;