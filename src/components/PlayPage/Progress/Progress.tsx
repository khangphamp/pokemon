import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { RootState } from '../../../app/store'
import './progress.scss'

const progressValue= (value: number) =>({width:`${value}%`})
interface ProgressProps {
    modelWin: boolean;
    setmodelFailed: React.Dispatch<React.SetStateAction<boolean>>;
}
function Progress({modelWin,setmodelFailed}:ProgressProps) {
    const time = useSelector((state:RootState)=>state.mode.modeInfo.time);
    const [num,setNum] = useState(time);
    useEffect(()=>{
        setNum(time);
    },[time])
    useEffect(() => {
        const progress =setTimeout(() =>{
            setNum(num-1);
        },1000)
        if(num ===0){
            clearTimeout(progress);
            if(modelWin !== true){
                setmodelFailed(true);
            }
           
        }
        if(modelWin === true){
            clearTimeout(progress);
        }
        return ()=>  clearTimeout(progress);
    },[modelWin, num, setmodelFailed])
    return (
        <div className="progress">
            <div style={progressValue(100*num/time)} className="progress-value"></div>
        </div>  
    )
}

export default Progress

