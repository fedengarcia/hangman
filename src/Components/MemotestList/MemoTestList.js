import React from 'react';
import { Grid } from '@material-ui/core';
import MemoTestItem from '../MemoTestItem/MemoTestItem';
import { MemoTestListStyle } from './MemoTestListStyle';
import { makeStyles } from '@material-ui/core';
import { shuffleArray } from '../../helpers/helpers';


const useStyles = makeStyles((theme) => MemoTestListStyle(theme));


const MemoTestList = ({items}) => {
    const classes = useStyles();

    return(
    <div className={classes.gameContainer}>
        <div className={classes.memoBoard}>
            
            {shuffleArray(items).map((item,i) => <MemoTestItem key={i} item={item}/>)}

        </div>
    </div>
    )
}

export default MemoTestList;