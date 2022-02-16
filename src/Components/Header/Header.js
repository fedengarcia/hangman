import React from 'react';
import {makeStyles} from '@material-ui/core';
import { HeaderStyle } from './HeaderStyle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const useStyle = makeStyles((theme) => HeaderStyle(theme))

export default function Header ({gameTitle}) {
    const classes = useStyle();

    return (
    <header className={classes.headerContainer}>
        <div className={classes.arrowBackIconContainer}>
        <ArrowBackIcon fontSize='large' className={classes.arrowBackIcon} />
        </div>
        <h1>{gameTitle}</h1>
    </header>)
}


