import React,{useState} from 'react';
import data from '../../data.json';
import {makeStyles} from '@material-ui/core';
import { GameContainerStyle } from './GameContainerStyle';
import HiddenWord from '../Word/HiddenWord';
import WrongLetters from '../Word/WorngLetters';
import HangmanContainer from '../HangManContainer/HangmanContainer';

const useStyle = makeStyles((theme) => GameContainerStyle(theme))

const GameContainer = () => {
    const classes = useStyle();
    const [myWords,setMyWords] = useState(data)


    return (<div className={classes.gameContainer}>
        
            <div >
                <HangmanContainer/>
                <WrongLetters/>
            </div>

        <HiddenWord />
        </div>
    )
}


export default GameContainer;