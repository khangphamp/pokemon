import { PayloadAction } from '@reduxjs/toolkit';
import {fork,take, put, delay, call, takeLeading } from 'redux-saga/effects'
import { addScore } from '../Mode/Mode';
import {FlippingOpen, offCardFlipped, handleDelete, actionProps, onClickCard } from './Card';
let BeforeId: number = NaN;
let BeforeNumber: number = NaN;

function* handleCardOne (payload: actionProps) {
  BeforeId = payload.id;
  BeforeNumber = payload.number;
  yield put(FlippingOpen(payload.id));
}
function* handleCardTwoDifferent (payload: actionProps) {
  yield put(FlippingOpen(payload.id));
  yield delay(600);
  yield put(offCardFlipped(BeforeId));
  BeforeId = payload.id;
  BeforeNumber = payload.number;
}
function* handleCardTwoSame (payload: actionProps) {
  BeforeId = NaN;
  BeforeNumber = NaN;
  yield put(FlippingOpen(payload.id));
  yield delay(600)
  yield put(handleDelete(payload.number));
  yield put(addScore());
}
function* checkCard() {
  while (true) {
    const action:PayloadAction<actionProps> = yield take (onClickCard);
    yield fork(handleCardOne,action.payload);
        while (isNaN(BeforeId) === false) {       
          const action:PayloadAction<actionProps> = yield take (onClickCard);
            if(isNaN(BeforeId) === true){
              yield fork(handleCardOne,action.payload);
       
            }else {
              if(BeforeNumber !== action.payload.number ){
                yield call(handleCardTwoDifferent,action.payload);
              }
              else{
                yield call(handleCardTwoSame,action.payload);
              }
            }
           
  
      }
     
  } 
}
function handleCardBefore (){
  BeforeId = NaN;
  BeforeNumber = NaN;
}
function* mySaga() {
  yield fork(checkCard);
  yield takeLeading('SET_CARD_BEFORE',handleCardBefore)
}

export default mySaga;