import { makeStyles } from '@material-ui/core';
import { NotificationStyle } from './NotificationStyle';
import React from 'react';


const useStyles = makeStyles((theme) => NotificationStyle(theme));

const Notification = ({showNotification}) => {
    const classes = useStyles();

    return (
        <div className={classes.notificationContainer}>
            {showNotification && <p>Ya ingresaste esa letra</p>}
        </div>
    )
}



export default Notification;