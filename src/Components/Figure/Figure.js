import React from 'react';
import { makeStyles } from '@material-ui/core';
import {FigureStyle} from './FigureStyle';


const useStyle = makeStyles((theme)=> FigureStyle(theme));

const Figure = ({wrongLetters}) => {
    const classes = useStyle();
    const errors = wrongLetters.length;

    return (
    
    <div className={classes.hangContainer}>
        <div className={classes.mastContainer}>
            <div className={classes.roof}></div>
            <div className={classes.rope}></div>
            <div className={classes.mast}></div>
            <div className={classes.floor}></div>
        </div>
        {/* FIGURE */}
        <div className={classes.figureContainer}>
                {errors >= 1 && <div className={classes.head}></div>}
                {errors >= 2 && <div className={classes.body}></div>}
                {errors >= 3 && <div className={classes.rightArm}></div>}
                {errors >= 4 && <div className={classes.leftArm}></div>}
                {errors >= 5 && <div className={classes.rightLeg}></div>}
                {errors >= 6 && <div className={classes.leftLeg}></div>}
        </div>
    </div>
)
}

export default Figure;