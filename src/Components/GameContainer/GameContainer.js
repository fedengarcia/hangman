import React,{useState,useEffect} from 'react';
import data from '../../data.json';
import {makeStyles} from '@material-ui/core';
import { GameContainerStyle } from './GameContainerStyle';
import HiddenWord from '../Word/HiddenWord';
import WrongLetters from '../Word/WrongLetters';
import HangmanContainer from '../HangManContainer/HangmanContainer';


const useStyle = makeStyles((theme) => GameContainerStyle(theme))

const words = data["data"]
const selectedWord = words[Math.floor(Math.random()*words.length)];

console.log(selectedWord)

const GameContainer = () => {
    const [playable,setPlayable] = useState(true);
    const [correctLetters,setCorrectLetters] = useState([]);
    const [wrongLetters,setWrongLetters] = useState([]);

    const classes = useStyle();

    useEffect(() => {
        const handleKeyPress = (event) => {
            if(playable && event.keyCode >= 65 && event.keyCode <= 90){
                const letter = event.key.toLowerCase();
                if(selectedWord.includes(letter)){
                    if(!correctLetters.includes(letter)){
                        setCorrectLetters(currentLetters => [...currentLetters,letter]);
                    }else{
                        // showNotifications
                    }
                }else{
                    if(!wrongLetters.includes(letter)){
                        setWrongLetters(wrongLetters => [...wrongLetters,letter]);
                    }else{
                        // showNotifications
                    }
                }
            }
        }
        window.addEventListener('keydown', handleKeyPress);

        return () => window.removeEventListener('keydown',handleKeyPress);
    }, [correctLetters,wrongLetters,playable]);

    
    

    return (<div className={classes.gameContainer}>
            <h2>Encontra la palabra - Ingresa una letra:</h2>

            <div className={classes.hangManContainer}>
                <HangmanContainer/>
            </div>

            <WrongLetters wrongLetters={wrongLetters}/>

            <HiddenWord  selectedWord={selectedWord} correctLetters={correctLetters}/>
        </div>
    )
}


export default GameContainer;