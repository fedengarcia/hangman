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
        <Grid 
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}>
            
            {shuffleArray(items).map((item,i) => 
            <Grid item xs={4} key={i}>
                <MemoTestItem item={item}/>
            </Grid>
            )}

            {shuffleArray(items).map((item,i) => 
            <Grid item xs={4} key={i}>
                <MemoTestItem item={item}/>
            </Grid>
            )}



        </Grid>
    </div>
    )
}

export default MemoTestList;