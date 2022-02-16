import React from 'react';
import {makeStyles} from '@material-ui/core';
import { HeaderStyle } from './HeaderStyle';

const useStyle = makeStyles((theme) => HeaderStyle(theme))

export default function Header ({gameTitle}) {
    const classes = useStyle();

    return (
    <header className={classes.headerContainer}>
        <h1>{gameTitle}</h1>
    </header>)
}


