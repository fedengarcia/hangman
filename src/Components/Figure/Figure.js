import React from 'react';
import { makeStyles } from '@material-ui/core';
import {FigureStyle} from './FigureStyle';


const useStyle = makeStyles((theme)=> FigureStyle(theme));

const Figure = () => {
    const classes = useStyle();


    return (<div className={classes.figureContainer}>
            <div className={classes.head}>head</div>
            <div className={classes.body}>body</div>
            <div className={classes.rightArm}>brazo derecho</div>
            <div className={classes.leftArm}>brazo izquierdo</div>
            <div className={classes.rigthLeg}>pata derecha</div>
            <div className={classes.leftLeg}>pata izquieda</div>
    </div>)
}

export default Figure;