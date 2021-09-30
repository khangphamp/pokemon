import { createSlice } from "@reduxjs/toolkit";
interface startProps {
    isStarted: boolean;
}
const initialState:startProps = {
    isStarted: false,
}

export const startGame = createSlice({
    name: 'start',
    initialState,
    reducers: {
        started: (state)=> {
            console.log("started")
            state.isStarted = true;
        },
        ended: (state)=> {
            state.isStarted = false;
        }
    }
})
export const {started,ended} = startGame.actions;
export default startGame.reducer