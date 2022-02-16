import React from 'react';
import {makeStyles} from '@material-ui/core';
import { HeaderStyle } from './HeaderStyle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const useStyle = makeStyles((theme) => HeaderStyle(theme))

export default function Header ({gameTitle}) {
    const classes = useStyle();
    const navigate = useNavigate();

    const onClickArrowBack = () => {
        navigate('/')
    }

    return (
    <header className={classes.headerContainer}>
        <div className={classes.arrowBackIconContainer}>
            <ArrowBackIcon 
            sx={{ fontSize: 50 }}
            className={classes.arrowBackIcon}
            onClick={onClickArrowBack}
            />
        </div>
        <h1>{gameTitle}</h1>
    </header>)
}


