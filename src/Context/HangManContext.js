import React, {createContext,useState} from 'react';

export const HangManModeContext = createContext();

export const HangManContext = (props) => {
    const [words,setWords] = useState([]);
    const [secretWord,setSecretWord] = useState([]); // GUARDAR PALABRA TOKENIZADA
    const [guessWord,setGuessWord] =  useState([]); // CARGAR LAS LETRAS ACERTADAS 
    const [lettersUsed,setLetterUsed] = useState([]); // CARGAR LAS LETRAS USADAS
    const [letterPress, setLetterPress] = useState(undefined); // LETRA APRETADA


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


    return <HangManModeContext.Provider value={{setWords}}>
        {props.children}
    </HangManModeContext.Provider>

}