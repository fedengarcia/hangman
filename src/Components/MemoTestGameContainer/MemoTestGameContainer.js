import React,{useEffect, useState} from 'react';
import MemoTestList from '../MemotestList/MemoTestList';
import axios from 'axios'
import { shuffleArray } from '../../helpers/helpers';

const MemoTestGameContainer = () => {
    const [memoItems,setMemoItems] = useState([]);
    const [itemsCheck,setItemsCheck] = useState([]);
    const [count, setCount] = useState(0);
    const [play,setPlay] = useState(true);

    useEffect(() => {
        

        if(play){
            axios.get('https://pokeapi.co/api/v2/pokemon?limit=6').then(res => {
                const shuffleMemoArray = shuffleArray([...res.data.results,...res.data.results]);
                setMemoItems(shuffleMemoArray.map((memoItem,i) => ({memoItem, flipped: false})));
            }).catch(err => {
                console.log('Ocurrio un error al cargar datos',err);
            })
            //RUN TIME
        }


        
    }, []);


    const handleClickMemoItem = (item) => {
        if(itemsCheck.length < 2){
            item.flipped = true;
            setItemsCheck([...itemsCheck,item.memoItem.name])
        }else{
            if(itemsCheck[0] === itemsCheck[1]){
                setCount(count + 2);
                if(count === 12){
                    setPlay(false);
                }
                setItemsCheck([])
            }else{
                setItemsCheck([])
            }
            
        }
        
        // console.log(item.memoItem.name);
        console.log("PUNTOS",count);
        console.log("ITEMS A COMPARAR ",itemsCheck);
    }

    return(
    <>
    <MemoTestList items={memoItems} handleClickMemoItem={handleClickMemoItem}/>

    </>)
}

export default MemoTestGameContainer;