import { delay, put, takeLatest } from "@redux-saga/core/effects";
import { CloseLoading, OpenLoading } from "../Loading/Loanding";
import { started } from "./startGame";

function* handleStart () {
    yield put(OpenLoading());
    yield delay(500);
    yield put(started());
    yield put(CloseLoading());
}

function* StartSaga (){
    yield takeLatest('CLICK_START',handleStart);
}
export default StartSaga;