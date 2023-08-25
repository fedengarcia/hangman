import React from 'react';
import { makeStyles } from '@material-ui/core';
import {WordStyles} from './WordStyles';
import { Animated } from 'react-animated-css';

const useStyles = makeStyles((theme) => WordStyles(theme));

const HiddenWord = ({selectedWord,correctLetters}) => {
    const classes = useStyles();

    

    return (
        <div className={classes.hiddenWordContainer}>
            {selectedWord.split('').map((letter,i) => {
                return(
                    <Animated className={classes.letter} animationIn="fadeIn" animationOut="fadeOut" isVisible={true} >
                        <span  key={i}>
                            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} >
                                <span>{correctLetters.includes(letter) ? letter : ''}</span>
                            </Animated>
                        </span>
                    </Animated>
                )
            })}
        </div>
    )
}

export default HiddenWord;