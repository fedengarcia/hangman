import React from 'react'
import { makeStyles } from '@material-ui/core'
import {HangStyle} from './HangStyle';


const useStyle = makeStyles((theme)=> HangStyle(theme));


const Hang = () => {
    const classes = useStyle()
    return(<div className={classes.hangContainer}>
        <div className={classes.roof}></div>
        <div className={classes.rope}></div>
        <div className={classes.mast}></div>
        <div className={classes.floor}></div>
    </div>)
}

export default Hang;

