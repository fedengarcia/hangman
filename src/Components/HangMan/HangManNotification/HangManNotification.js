import { makeStyles } from '@material-ui/core';
import { HangManNotificationStyle } from './HangManNotificationStyle';
import React from 'react';


const useStyles = makeStyles((theme) => HangManNotificationStyle(theme));

const HangManNotification = ({showNotification}) => {
    const classes = useStyles();

    return (
        <div className={classes.notificationContainer}>
            {showNotification && <p>Ya ingresaste esa letra</p>}
        </div>
    )
}



export default HangManNotification;