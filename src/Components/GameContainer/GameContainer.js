import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { GameContainerStyle } from './GameContainerStyle';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => GameContainerStyle(theme));


const GameContainer = () => {
    const classes = useStyles();

    return (
        <div className={classes.gameContainer}>
            <div className={classes.games}>
                <h1>JUEGA!</h1>
                <Link to="/hangMan" className={classes.linkStyle}><Button variant="contained" className={classes.button}>HangMan</Button></Link>
                <Link to="/memoTest" className={classes.linkStyle}><Button variant="contained" className={classes.button}>Memotest</Button></Link>
            </div>
        </div>
    );
} 

export default GameContainer;