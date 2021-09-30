import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ramdom } from "../../utils";

interface CardProps {
    id: number;
    number: number,
    isFlipped: boolean,
    isDelete: boolean,
}

interface modeProps {
    Cards: CardProps[];
    AllCardDelete:number[];
}
const initialState:modeProps = {
    Cards: ramdom(0),
    AllCardDelete:[],
}

export interface actionProps {
    id:number ,
    number:number
}

const Card = createSlice({
    name: 'Card',
    initialState,
    reducers: {
        onClickCard: (state,action: PayloadAction<actionProps>) => {        
        },
        FlippingOpen: (state,action: PayloadAction<number>) => {        
            state.Cards[action.payload].isFlipped= true;
        },
        handleDelete:(state,action: PayloadAction<number>) => {
            let newCard:CardProps[] = [];
                state.Cards.forEach((card)=>{
                    if(card.number === action.payload){
                        newCard.push({...card,isDelete:true});
                    }else{
                         newCard.push({...card})
                    }                           
                })
            state.AllCardDelete =[...state.AllCardDelete,action.payload]
            state.Cards = newCard;
        },
         offCardFlipped:(state,action: PayloadAction<number>)=>{
            state.Cards[action.payload].isFlipped= false;
        },
        setCards:(state,action: PayloadAction<number>)=> {
            state.Cards = ramdom(action.payload);
            state.AllCardDelete = [];
        },
        setAllCardDelete:(state)=> {
            state.AllCardDelete = [];
        }
    },
})
export const { FlippingOpen, offCardFlipped , handleDelete,onClickCard,setCards,setAllCardDelete } = Card.actions;

export default Card.reducer;