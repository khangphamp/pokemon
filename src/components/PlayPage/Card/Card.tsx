import {memo } from "react";
import { useDispatch} from "react-redux";
import './Card.scss';
import {   onClickCard} from "../../../features/Card/Card";
interface cardProps {
    id: number;
    number: number;
    isFlipped: boolean;
    isDelete: boolean
}
interface CardProps {
    card: cardProps;
}
function Card({card}:CardProps) {
    const flipe = card.isFlipped;
    const remove = card.isDelete
    const dispatch = useDispatch();
    const handleFliper = () => {   
        if(flipe === false){
            dispatch(onClickCard({id:card.id,number:card.number}));
        }
        else{
            return;
        }   
      
    }
    return (
        <div onClick={handleFliper}  className={`card ${flipe?'disabled':''}`}>
            <div className={`card card-fliped ${flipe? 'fliper':''} ${remove? 'remove':''}` }>
                <div className="card-content card-after" style={{backgroundImage:"url('/images/icon_back.png')"}}></div>
                <div className="card-content card-before" style={{backgroundImage:`url('/images/${card.number}.png')`}}></div>
            </div>          
        </div>
    )
}

export default memo(Card)

