import React from 'react';
import { makeStyles } from '@material-ui/core';
import {WordStyles} from './WordStyles';


const useStyles = makeStyles((theme) => WordStyles(theme));

const WrongLetters = ({wrongLetters}) => {
    const classes = useStyles();

    return (
        <div className={classes.WrongLettersContainer}>
            {wrongLetters > 0 && <h2>LETRAS ERRONEAS:</h2>}
            {wrongLetters.map((letter,i) => <span key={i}>{letter},</span>)}
        </div>
    )
}

export default WrongLetters;