import React from 'react';
import { makeStyles } from '@material-ui/core';
import {WordStyles} from './WordStyles';


const useStyles = makeStyles((theme) => WordStyles(theme));

const LettersUsed = ({letterPress}) => {
    const classes = useStyles();

    return (
        <div className={classes.LettersUsedContainer}>
            <h2>{`LETRAS USADAS: ${letterPress}`}</h2>
            {/* {letters.map((letter) => <p key={letter.index()}>{`${letter},`}</p>)} */}
        </div>
    )
}

export default LettersUsed;