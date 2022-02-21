import React,{useState,createContext} from 'react';

export const MemoContext = createContext();

export const MemoTestContext = (props) => {

    const [cards, setCard] = useState([]);
    const [countCards, setCountCards] = useState(0);

    const getIndex = (name) =>{
        return cards.findIndex(card => card.name === name);
    }

    const addCard = (name) => {
        
        if(cards.length === 0){
            console.log("LAsssRGO --->",cards.length)

            setCard(name);
            console.log(cards);
        }else if(cards.length === 2){
            checkCards();
        }else{
            let result = getIndex(name);
            console.log(result);
            if(result === -1){
                setCard(cards => [...cards,name])
                console.log(cards);
            }
        }
        
        console.log("LARGO --->",cards.length)
        console.log("CARTAS SELECCIONADAS ---->",cards);
    }

    const clearCards = () => {
        setCard([]);
    }


    const checkCards = () => {
        if(cards[0] === cards[1]){
            setCountCards(countCards + 2);
            clearCards();
        }else{
            clearCards();
        }
    }

    return <MemoContext.Provider value={{addCard, countCards}}>
        {props.children}
    </MemoContext.Provider>
        
    
}