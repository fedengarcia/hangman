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
    const {setWords} = useContext(HangManModeContext);


    useEffect(() => {
        setWords(data);
    }, []);

    const handleKeyPress = (event) => {
        // setLetterPress(event.key);
        if (event.key >= 48 && event.key <= 57) {
            console.log("presionaste un numero");
        } else{
            console.log("presionaste una letra");
      }
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