import React,{useEffect, useState} from 'react';
import MemoTestList from '../MemotestList/MemoTestList';
import axios from 'axios'
import { shuffleArray } from '../../helpers/helpers';

const MemoTestGameContainer = () => {
    const [memoItems,setMemoItems] = useState([]);
    const [play,setPlay] = useState(true);

    useEffect(() => {
        

        if(play){
            axios.get('https://pokeapi.co/api/v2/pokemon?limit=6').then(res => {
                const shuffleMemoArray = shuffleArray([...res.data.results,...res.data.results]);
                setMemoItems(shuffleMemoArray.map((memoItem,i) => ({index:i, memoItem, flipped: false})));
            }).catch(err => {
                console.log('Ocurrio un error al cargar datos',err);
            })
            //RUN TIME
        }


        
    }, []);


    const handleClickMemoItem = (name) => {
        console.log(name)
    }

    return(
    <>
    <MemoTestList items={memoItems} handleClickMemoItem={handleClickMemoItem}/>

    </>)
}

export default MemoTestGameContainer;