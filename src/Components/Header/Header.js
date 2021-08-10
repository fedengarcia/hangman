import React from 'react';
import {makeStyles} from '@material-ui/core';
import { HeaderStyle } from './HeaderStyle';

const useStyle = makeStyles((theme) => HeaderStyle(theme))

const Header = () => {
    const classes = useStyle();

    return (<header className={classes.headerContainer}>
        <h1>HANG MAN</h1>
        <p>Encontra la palabra - Ingresa una letra</p>
    </header>)
}


export default Header;