import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import Card from './Card/Card';
import Side from './SideBar/SideBar';
import Model from './Model/Model';
import Progress from './Progress/Progress';
import './PlayPage.scss';
import { useEffect, useState } from 'react';
import { setCards } from '../../features/Card/Card';

function PlayPage() {
    const [modelWin, setModelWin] = useState(false);
    const [modelFailed, setmodelFailed] = useState(false);
    const cards = useSelector((state:RootState)=>state.card.Cards);
    const mode = useSelector((state:RootState)=>state.mode.modeInfo.mode);
    const deleteCard = useSelector((state:RootState)=>state.card.AllCardDelete)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(setCards(mode));
    },[dispatch, mode])
    useEffect(() => {
       if(deleteCard.length === mode){
        setModelWin(true);
       }
    },[deleteCard, dispatch, mode])
    return (
        <div className="playground">
            { modelWin ?<Model setModelWin ={setModelWin} setmodelFailed ={setmodelFailed}  type='win'  /> : '' }
            { modelFailed ?<Model setModelWin ={setModelWin} setmodelFailed ={setmodelFailed} type='failed'  /> : '' }
            <div className="header">
                <Progress modelWin={modelWin} setmodelFailed={setmodelFailed}  />
            </div>
            <div className="content">
                {cards.map((card,index) => <Card key={index} card={card} />)}
            </div>
            <div className="sidebar">
                <Side />
            </div>
            <div className="footer">
            </div>
        </div>
        
    )
}

export default PlayPage

