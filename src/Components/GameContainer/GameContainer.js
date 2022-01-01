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
       
    }, );

    const handleKeyPress = (event) => {

    }
    

    return (<div className={classes.gameContainer}>
            <p>Encontra la palabra - Ingresa una letra:</p>
            <input type="text" onKeyDown={handleKeyPress}/>

            <div className={classes.hangManContainer}>
                <HangmanContainer/>
            </div>

            <WrongLetters/>

            <HiddenWord  selectedWord={selectedWord} correctLetters={correctLetters}/>
        </div>
    )
}


export default GameContainer;