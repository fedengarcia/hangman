import { Button, makeStyles } from '@material-ui/core';
import React, {useState} from 'react';
import { PopUpStyle } from './PopUpStyle';
import { checkWin } from '../../helpers/helpers';

const useStyles = makeStyles((theme) => PopUpStyle(theme));

const PopUp = ({correctLetters, wrongLetters, selectedWord, setPlay}) => {
    const classes = useStyles();
    const [message,setMessage] = useState('');

    if(checkWin(correctLetters,wrongLetters,selectedWord) === 'win'){
        setMessage('Haz ganado!');
        setPlay(false);
    }else if (checkWin(correctLetters,wrongLetters,selectedWord) === 'lose') {
        setMessage('Haz Perdido!');
        setPlay(false);
    }

    const handleOnClick = (setPlay) => {
        setPlay(true)
    }

    return(
        <div className={classes.popUpcontainer} style={message !== '' ? {display:"flex"} : {}}>
            <div className={classes.popUp}>
                <h2>{message}</h2>
                <h3>{`La palabra era ${selectedWord}`}</h3>
                <Button
                onClick={handleOnClick(setPlay)}
                >Jugar de nuevo</Button>
            </div>
        </div>
    )
}

export default PopUp;