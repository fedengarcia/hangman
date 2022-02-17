import React,{useEffect, useState} from 'react';
import MemoTestList from '../MemotestList/MemoTestList';
import axios from 'axios'
import MemoTestHeader from '../Header/MemoTestHeader';


const MemoTestGameContainer = () => {
    const [items,setItems] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=9').then(res => {
            setItems(res.data.results);
        }).catch(err => {
            console.log('Ocurrio un error al cargar datos',err);
        })
    }, []);

    return(
    <>
    <MemoTestHeader/>
    <MemoTestList items={items}/>

    </>)
}

export default MemoTestGameContainer;