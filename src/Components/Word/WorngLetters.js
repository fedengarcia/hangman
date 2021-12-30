import React from 'react';
import { makeStyles } from '@material-ui/core';
import {WordStyles} from './WordStyles';


const useStyles = makeStyles((theme) => WordStyles(theme));

const WrongWords = ({letters}) => {
    const classes = useStyles();

    return (
        <div className={classes.wrongLettersContainer}>
            <h2>Wrong letters:</h2>
            {/* {letters.map((letter) => <p key={letter.index()}>{`${letter},`}</p>)} */}
        </div>
    )
}

export default WrongWords;