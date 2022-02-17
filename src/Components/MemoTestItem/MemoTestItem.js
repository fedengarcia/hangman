import React from 'react';
import { makeStyles } from '@material-ui/core';
import { MemoTestItemStyle } from './MemoTestItemStyle';

const useStyles = makeStyles((theme) => MemoTestItemStyle(theme));

const MemoTestItem = ({item}) => {
    const classes = useStyles();


    return(
        <div className={classes.itemContainer}>
            <h1>{item.name}</h1>
            {/* <img src={}></img> */}
        </div>
    )
}


export default MemoTestItem;