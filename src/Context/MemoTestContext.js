import React,{useState,createContext} from 'react';

export const MemoContext = createContext();

export const MemoTestContext = (props) => {
    const [cards, setCard] = useState([]);
    const [countCards, setCountCards] = useState(0);

    const getIndex = (name) =>{
        return cards.findIndex(card => card.name === name);
    }

    const addCard = (card) => {
        let result = getIndex(card.name);
        if(result === -1){
            setCard(cards => [...cards,card])
        }
    }

    const clearCards = () => {
        setCard([]);
    }


    const checkCards = () => {
        if(cards[0].name === cards[1].name){
            setCountCards(countCards + 2);
            return true;
        }else{
            return false;
        }
    }

    return <MemoContext.Provider value={{addCard, countCards}}>
        {props.children}
    </MemoContext.Provider>
        
    
}