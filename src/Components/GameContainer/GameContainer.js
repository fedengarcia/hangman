import React,{useState,useEffect,useContext} from 'react';
import data from '../../data.json';
import {makeStyles} from '@material-ui/core';
import { GameContainerStyle } from './GameContainerStyle';
import HiddenWord from '../Word/HiddenWord';
import LettersUsed from '../Word/LettersUsed';
import HangmanContainer from '../HangManContainer/HangmanContainer';
import {HangManModeContext} from '../../Context/HangManContext';


const useStyle = makeStyles((theme) => GameContainerStyle(theme))



const GameContainer = () => {
    const classes = useStyle();
    const {setWords,words,secretWord,setSecretWord,wordNumber} = useContext(HangManModeContext);


    useEffect(() => {
        setWords(data["data"]);
       

        if(wordNumber <= words.length){
            console.log(`PALABRA NUMERO ${wordNumber}`);
            setSecretWord(words[wordNumber]);
            console.log(`PALABRA A ADIVINAR ES ${secretWord}`);
        }
    }, [wordNumber]);

    const handleKeyPress = (event) => {
        console.log("PALABRAS---->",words)
        console.log(words.length)
        console.log("PALABRA A ADIVINAR ------>", secretWord)
    }
    

    return (<div className={classes.gameContainer}>
            <p>Encontra la palabra - Ingresa una letra:</p>
            <input type="text" onKeyDown={handleKeyPress}/>

            <div className={classes.hangManContainer}>
                <HangmanContainer/>
            </div>

            <LettersUsed/>

            <HiddenWord />
        </div>
    )
}


export default GameContainer;