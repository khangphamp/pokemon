import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { newMode, playAgain } from '../../../features/Mode/Mode';
import './model.scss';
interface ModelProps {
    setModelWin : React.Dispatch<React.SetStateAction<boolean>>;
    type:string;
    setmodelFailed: React.Dispatch<React.SetStateAction<boolean>>;
}
function Model({setModelWin, setmodelFailed, type}:ModelProps) {
    const level = useSelector((state:RootState)=>state.mode.modeInfo.level)
    const [disabled, setDisabled] = useState(false);
    const dispatch = useDispatch()
    const handleContinue = () => {
        setDisabled(true);
        dispatch({type:'CONTINUE'});
        dispatch({type:'SET_CARD_BEFORE'});
        setModelWin(false);
    }
    const handleYes = () => {
        dispatch({type:'PLAY_AGAIN_GAME'});
        dispatch({type:'SET_CARD_BEFORE'});
        setmodelFailed(false);
    }
    if(type === 'win'){
        return (
            <div className="model">
                <span className="model-title">Congratulations you across mode {level}</span>
                <button onClick={handleContinue} disabled={disabled} className="btn btn-model">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    CONTINUE
                </button>
            </div>
        )
    }
    else {
        return (
            <div className="model-warp">
            <div className="model">
                <p className="model-title">You are Failed at mode {level}</p>
                <p className="model-title">Do you play again mode 1?</p>
                <button onClick={handleYes} disabled={disabled} className="btn btn-model">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    YES
                </button>
            </div>
            </div>
        )
    }
    
}

export default Model
