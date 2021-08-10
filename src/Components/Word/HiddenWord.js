import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core';
import {WordStyles} from './WordStyles';


const useStyles = makeStyles((theme) => WordStyles(theme));

const HiddenWord = ({word,showLetter}) => {
    const classes = useStyles();
    // const [wordSplit,setWord] = useState([]);


    // useEffect(() => {
    //     setWord(word.split(" "))
    // }, [word]);

    return (
        <div className={classes.hiddenWordContainer}>
            <h1>Palabra secreta</h1>
            {/* {wordSplit.map((letter) => <p key={letter.index()}>{`${letter},`}</p>)} */}
        </div>
    )
}

export default HiddenWord;