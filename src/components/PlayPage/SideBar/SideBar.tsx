import { memo } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../app/store'
import './SideBar.scss'
function SideBar() {
    const totalScore = useSelector((state:RootState)=>state.mode.totalScore);
    const Level = useSelector((state:RootState)=>state.mode.modeInfo.level)
    return (
        <>
         <span className="text3d">Level {Level}</span>
         <div className="score">
            <span className="text3d">Scores</span>
            <span className="text3d text-score">{totalScore}</span>
         </div>
        </>
    )
}


export default memo(SideBar)

