import React,{useState,useEffect} from 'react';
import data from '../../data.json';
import {makeStyles} from '@material-ui/core';
import { GameContainerStyle } from './GameContainerStyle';
import HiddenWord from '../Word/HiddenWord';
import WrongLetters from '../Word/WrongLetters';
import Figure from '../Figure/Figure';
import { showNotification as show} from '../../helpers/helpers';
import Notification from '../Notification/Notification';
import {useHistory} from 'react-router-dom';

const useStyle = makeStyles((theme) => GameContainerStyle(theme))

const words = data["data"]
const selectedWord = words[Math.floor(Math.random()*words.length)];

console.log(selectedWord)

const GameContainer = () => {
    const [play,setPlay] = useState(true);
    const [correctLetters,setCorrectLetters] = useState([]);
    const [wrongLetters,setWrongLetters] = useState([]);
    const [showNotification,setShowNotification] = useState(false);


    const classes = useStyle();
    const history = useHistory();

    

    useEffect(() => {
        const handleWinPopUp = () => {
            history.push('/PopUpContainer/WinPopUp');
        }
    
        const handleLoosePopUp = () => {
            history.push('/PopUpContainer/LoosePopUp');
        }

        
    
        const handleKeyPress = (event) => {
            if(play && event.keyCode >= 65 && event.keyCode <= 90){
                const letter = event.key.toLowerCase();
                if(selectedWord.includes(letter)){
                    if(!correctLetters.includes(letter)){
                        setCorrectLetters(currentLetters => [...currentLetters,letter]);
                        console.log("LONGITUD",correctLetters,selectedWord)
                        

                        if(selectedWord.lenght === correctLetters.length){
                            handleWinPopUp();
                        }
                    }else{
                        show(setShowNotification);
                    }
                }else{
                    if(!wrongLetters.includes(letter)){
                        setWrongLetters(wrongLetters => [...wrongLetters,letter]);
                        if(wrongLetters.length === selectedWord.length){
                            handleLoosePopUp();
                        }
                    }else{
                        show(setShowNotification);
                    }
                }
            }else{
                handleWinPopUp();
                handleLoosePopUp();
            }
        }
        window.addEventListener('keydown', handleKeyPress);

        return () => window.removeEventListener('keydown',handleKeyPress);
    }, [correctLetters,wrongLetters,play,history]);

    
    

    return (  
    <div className={classes.gameContainer}>
            <h2>Encontra la palabra - Ingresa una letra:</h2>

            <div className={classes.figureWrongContainer}>
                <Figure wrongLetters={wrongLetters} setPlay={setPlay}/>

                <WrongLetters wrongLetters={wrongLetters}/>    
            </div>
            <HiddenWord  selectedWord={selectedWord} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters}/>

            <Notification showNotification={showNotification}/>
    </div>)
}


export default GameContainer;