import React, {createContext,useState} from 'react';

export const HangManModeContext = createContext();

export const HangManContext = (props) => {
    const [secretWord,setSecretWord] = useState([]);
    const [guessWord,setGuessWord] =  useState([]);
    const [lettersUsed,setLetterUsed] = useState([]);



    const checkLetter = (letter) => {
        // const result = items.filter(id => items.id === id);
        // if(result === []){
        //     return false;
        // }else{
        //     return true;
        // }
        if(secretWord.includes(letter)){
            setGuessWord(...guessWord,letter);
            setLetterUsed(...lettersUsed,letter);
        }else{
            setLetterUsed(...lettersUsed,letter);
        }
    }


    return <HangManModeContext.Provider value={{setSecretWord,guessWord,lettersUsed,checkLetter}}>
        {props.children}
    </HangManModeContext.Provider>

}