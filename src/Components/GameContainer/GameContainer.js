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
            setSecretWord(words[wordNumber]);
        }
    }, [setWords,words,secretWord,setSecretWord,wordNumber]);

    const handleKeyPress = (event) => {
        // console.log("LETRA PRESIONADA---->",event.key);
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