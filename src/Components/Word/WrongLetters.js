import React from 'react';
import { makeStyles } from '@material-ui/core';
import {WordStyles} from './WordStyles';
import { Animated } from 'react-animated-css';

const useStyles = makeStyles((theme) => WordStyles(theme));

const WrongLetters = ({wrongLetters}) => {
    const classes = useStyles();

    return (
        <div className={classes.WrongLettersContainer}>
            <h4>{`LETRAS ERRONEAS:  `}</h4>
            {wrongLetters.map((letter,i) => 
                     <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} >
                        <span key={i}>{letter}, 
                        </span>
                     </Animated>
         
            )}
        </div>
    )
}

export default WrongLetters;