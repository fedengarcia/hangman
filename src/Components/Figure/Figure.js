import React from 'react';
import { makeStyles } from '@material-ui/core';
import {FigureStyle} from './FigureStyle';


const useStyle = makeStyles((theme)=> FigureStyle(theme));

const Figure = () => {
    const classes = useStyle();


    return (<div className={classes.figureContainer}>
            <div className={classes.head}><div></div></div>
            <div className={classes.body}></div>
            <div className={classes.rightArm}><div></div></div>
            <div className={classes.leftArm}><div></div></div>
            <div className={classes.rightLeg}><div></div></div>
            <div className={classes.leftLeg}><div></div></div>
    </div>)
}

export default Figure;