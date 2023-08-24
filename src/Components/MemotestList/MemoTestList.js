import React from 'react';
import MemoTestItem from '../MemoTestItem/MemoTestItem';
import { MemoTestListStyle } from './MemoTestListStyle';
import { makeStyles } from '@material-ui/core';
import MemoTestHeader from '../Header/MemoTestHeader';
import {Animated} from "react-animated-css";


const useStyles = makeStyles((theme) => MemoTestListStyle(theme));


const MemoTestList = (props) => {
    const classes = useStyles();
    return(
    <div className={classes.gameContainer}>
        <MemoTestHeader/>

        <div className={classes.memoBoard}>

            {props.items.map((item,i) => 
                    // <Animated animationIn="bounceInLeft" animationOut="fadeOut">

            <MemoTestItem key={i} item={item} handleClickMemoItem={props.handleClickMemoItem}/>
                // </Animated>
            )}

        </div>
    </div>
    )
}

export default MemoTestList;