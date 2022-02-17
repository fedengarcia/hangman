import React,{useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core';
import { MemoTestGameContainerStyle } from './MemoTestGameContainerStyle';
import MemoTestList from '../MemotestList/MemoTestList';
import axios from 'axios'
import MemoTestHeader from '../Header/MemoTestHeader';

const useStyles = makeStyles((theme) => MemoTestGameContainerStyle(theme));

const MemoTestGameContainer = () => {
    const [items,setItems] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=10').then(res => {
            setItems(res.data.results)
        }).catch(err => {
            console.log('Ocurrio un error al cargar datos',err);
        })
    }, []);

    return(
    <>
    <MemoTestHeader/>
    <div className={classes.gameContanier}>
        <MemoTestList items={items}/>
    </div>
    </>)
}

export default MemoTestGameContainer;