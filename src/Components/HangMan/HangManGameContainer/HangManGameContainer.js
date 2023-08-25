import React,{useState,useEffect} from 'react';
import data from '../../../data.json';
import {makeStyles} from '@material-ui/core';
import { HangManGameContainerStyle } from './HangManGameContainerStyle';
import HiddenWord from '../../Word/HiddenWord';
import WrongLetters from '../../Word/WrongLetters';
import HangManFigure from '../HangManFigure/HangManFigure';
import { showNotification as show} from '../../../helpers/helpers';
import { checkWin } from '../../../helpers/helpers';
import HangManNotification from '../HangManNotification/HangManNotification';
import {useNavigate} from 'react-router-dom';
import HangManHeader from '../../Header/HangManHeader';

const useStyle = makeStyles((theme) => HangManGameContainerStyle(theme))

const words = data["data"]
const selectedWord = words[Math.floor(Math.random()*words.length)];

const HangManGameContainer = () => {
    const [play,setPlay] = useState(true);
    const [correctLetters,setCorrectLetters] = useState([]);
    const [wrongLetters,setWrongLetters] = useState([]);
    const [showNotification,setShowNotification] = useState(false);


    const classes = useStyle();
    const navigate = useNavigate();

    

    useEffect(() => {


        const handleKeyPress = (event) => {
            if(play && event.keyCode >= 65 && event.keyCode <= 90){
                const letter = event.key.toLowerCase();
                if(selectedWord.includes(letter)){
                    if(!correctLetters.includes(letter)){
                        setCorrectLetters(currentLetters => [...currentLetters,letter]);                    
                    }else{
                        show(setShowNotification);
                    }
                }else{
                    if(!wrongLetters.includes(letter)){
                        setWrongLetters(wrongLetters => [...wrongLetters,letter]);
                    }else{
                        show(setShowNotification);
                    }
                }
            }
           
        }
        if(checkWin(correctLetters,wrongLetters,selectedWord) === 'win'){
            setPlay(false);
            navigate('/dialog/winDialogHangMan');
        }else if (checkWin(correctLetters,wrongLetters,selectedWord) === 'lose') {
            setPlay(false);
            navigate('/dialog/loseDialogHangMan');
        }else {
            window.addEventListener('keydown', handleKeyPress);
            return () => window.removeEventListener('keydown',handleKeyPress);
        }


        
        
    }, [correctLetters,wrongLetters,play,navigate]);

    
    

    return (  <>

    <div className={classes.gameContainer}>
    <HangManHeader/>
            <h2>Adivina la palabra</h2>
            <h2>Ingresa una letra</h2>


            <div className={classes.figureWrongContainer}>
                <HangManFigure wrongLetters={wrongLetters} setPlay={setPlay}/>

                <WrongLetters wrongLetters={wrongLetters}/>    
            </div>
                <HiddenWord  selectedWord={selectedWord} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters}/>

            <div className={classes.notificationContainer}>
                <HangManNotification showNotification={showNotification}/>
            </div>
    </div>
    </>)
}


export default HangManGameContainer;