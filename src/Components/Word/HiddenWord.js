import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core';
import {WordStyles} from './WordStyles';


const useStyles = makeStyles((theme) => WordStyles(theme));

const HiddenWord = ({selectedWord,correctLetters}) => {
    const classes = useStyles();


    return (
        <div className={classes.hiddenWordContainer}>
            
            {selectedWord.split('').map((letter,i) => {
                return(
                    <span className={classes.letter} key={i}>
                        {correctLetters.includes(letter) ? letter : ''}
                    </span>
                )
            })}
        </div>
    )
}

export default HiddenWord;