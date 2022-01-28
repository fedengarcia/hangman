import React from 'react';
import { makeStyles } from '@material-ui/core';
import { MemoTestGameContainerStyle } from './MemoTestGameContainerStyle';

const useStyles = makeStyles((theme) => MemoTestGameContainerStyle(theme));

const MemoTestGameContainer = () => {
    const classes = useStyles();


    return(<div className={classes.gameContanier}>
        <h1>MEMOTEST</h1>
    </div>)
}

export default MemoTestGameContainer;