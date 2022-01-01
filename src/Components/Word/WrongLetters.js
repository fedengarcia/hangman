import React from 'react';
import { makeStyles } from '@material-ui/core';
import {WordStyles} from './WordStyles';


const useStyles = makeStyles((theme) => WordStyles(theme));

const WrongLetters = ({letterPress}) => {
    const classes = useStyles();

    return (
        <div className={classes.WrongLettersContainer}>
            <h2>{`LETRAS ERRONEAS: ${letterPress}`}</h2>
        </div>
    )
}

export default WrongLetters;