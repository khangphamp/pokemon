import { createSlice } from "@reduxjs/toolkit";
import { ModeGame } from "../../data/modeGame";



export const initialState = {
    modeInfo:{...ModeGame[0]},
    totalScore:0,
};
export const Mode = createSlice({
    name: "Mode",
    initialState,
    reducers: {
        // called to CardSaga when TwoCardSame
        addScore:(state)=>{
            state.totalScore = state.totalScore + state.modeInfo.score;
        },
        newMode:(state)=>{    
            state.modeInfo ={...ModeGame[state.modeInfo.level]}
        },
        playAgain:(state)=>{
            state.modeInfo ={...ModeGame[0]};
            state.totalScore = 0;
        }
    }
})
export const { addScore, newMode, playAgain } = Mode.actions;
export default Mode.reducer;