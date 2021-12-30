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
    const {setWords,words} = useContext(HangManModeContext);


    useEffect(() => {
        setWords(data);
    }, []);

    const handleKeyPress = (event) => {
        console.log(words);
    }
    

    return (<div className={classes.gameContainer}>
            <p>Encontra la palabra - Ingresa una letra:</p>
            <input type="text" onKeyDown={handleKeyPress}/>

            <div className={classes.hangAndLettersContainer}>
                <HangmanContainer/>
            </div>

            {/* <LettersUsed letterPress={letterPress}/> */}

            <HiddenWord />
        </div>
    )
}


export default GameContainer;