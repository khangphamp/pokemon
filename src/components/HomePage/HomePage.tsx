import { useState } from 'react'
import './home.scss'
import {useDispatch, } from 'react-redux'
// import { started } from '../../features/startGame/startGame';
function HomePage() {
    const [animation,setAnimation] = useState(false);
    const dispatch = useDispatch();
    const startGame = () => {
        setAnimation(true);
        setTimeout(() => {
             dispatch({type: 'CLICK_START'});
        },500)
      
    }
    return (
        <div className="HomePage" style={{backgroundImage: "url('/images/bg.jpg')"}}>
            <button onClick={startGame} className={`btn ${animation?'btn-home':''}`}>Start Game</button>
        </div>
    )
}

export default HomePage
