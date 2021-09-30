import { configureStore } from "@reduxjs/toolkit";

import CardReducer from "../features/Card/Card";
import startGameReducer  from "../features/startGame/startGame";
import ModeReducer from "../features/Mode/Mode";
import LoandingReducer from "../features/Loading/Loanding";

import createSagaMiddleware from 'redux-saga'
import rootSaga from "./rootSaga";
const sagaMiddleware = createSagaMiddleware()
const store =  configureStore({
    reducer: {
        start: startGameReducer,
        card: CardReducer,
        mode: ModeReducer,
        loading:LoandingReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
})
sagaMiddleware.run(rootSaga);
export type RootState = ReturnType<typeof store.getState>

export default store;