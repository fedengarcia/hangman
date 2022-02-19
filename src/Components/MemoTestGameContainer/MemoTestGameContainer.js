import React,{useEffect, useState,useContext} from 'react';
import MemoTestList from '../MemotestList/MemoTestList';
import axios from 'axios'
import MemoTestHeader from '../Header/MemoTestHeader';
import {MemoContext} from '../../Context/MemoTestContext';


const MemoTestGameContainer = () => {
    const [items,setItems] = useState([]);
    const [play,setPlay] = useState(true);
    const {countCards} = useContext(MemoContext);

    useEffect(() => {

        if(play){
            axios.get('https://pokeapi.co/api/v2/pokemon?limit=9').then(res => {
                setItems(res.data.results);
            }).catch(err => {
                console.log('Ocurrio un error al cargar datos',err);
            })
            //RUN TIME
        }

        if(countCards === 20){
            setPlay(false);
        }
        
    }, [play,countCards]);

    return(
    <>
    <MemoTestHeader/>
    <MemoTestList items={items}/>

    </>)
}

export default MemoTestGameContainer;