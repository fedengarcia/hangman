import React, {createContext,useState,useEffect} from 'react';

export const HangManModeContext = createContext();

export const HangManContext = (props) => {
    const [words,setWords] = useState([]);
    const [secretWord,setSecretWord] = useState(undefined); // GUARDA PALABRA A ADIVINAR
    
    const [tokenizedWord,setTokenizedWord] = useState([]); // GUARDAR PALABRA TOKENIZADA PARA ADIVINAR
    const [guessWord,setGuessWord] =  useState([]); // CARGAR LAS LETRAS ACERTADAS 
    const [lettersUsed,setLetterUsed] = useState([]); // CARGAR LAS LETRAS USADAS
    const [wordNumber,setWordNumber] = useState(0);
    // const [letterPress, setLetterPress] = useState(undefined); // LETRA APRETADA


    useEffect(() => {
        setTokenizedWord()
    }, [secretWord]);

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


    return <HangManModeContext.Provider value={{setWords,words,secretWord,setSecretWord,wordNumber}}>
        {props.children}
    </HangManModeContext.Provider>

}