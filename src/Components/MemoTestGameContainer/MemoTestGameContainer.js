import React,{useEffect, useState} from 'react';
import MemoTestList from '../MemotestList/MemoTestList';
import axios from 'axios'
import { shuffleArray } from '../../helpers/helpers';
import { useNavigate } from 'react-router-dom';

const MemoTestGameContainer = () => {
    const [memoItems,setMemoItems] = useState([]);
    // const [itemsCheck,setItemsCheck] = useState([]);
    const [selectedMemoItem,setSelectedMemoItem] = useState(null);
    const [count, setCount] = useState(0);
    const [play,setPlay] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {

        if(play){
            axios.get('https://pokeapi.co/api/v2/pokemon?limit=8').then(res => {
                const shuffleMemoArray = shuffleArray([...res.data.results,...res.data.results]);
                setMemoItems(shuffleMemoArray.map((memoItem,i) => ({index: i, memoItem, flipped: false})));
            }).catch(err => {
                console.log('Ocurrio un error al cargar datos',err);
            })
            //RUN TIME
        }


        
    }, [play]);


    const handleClickMemoItem = (item) => {
        const flippedMemoItem = {...item,flipped:true};
        let memoItemsCopy = [...memoItems];
        memoItemsCopy.splice(item.index,1,flippedMemoItem);
        setMemoItems(memoItemsCopy);
        
        if(selectedMemoItem === null){
           setSelectedMemoItem(item);
        }else if(selectedMemoItem.memoItem.name === item.memoItem.name){
           setSelectedMemoItem(null);
           setCount(count + 2)
           
           console.log(count);
            if(count === 10){
                setPlay(false);
                navigate("/dialog/winDialogMemoTest");
            }
        }else{

            setTimeout(() => {
                memoItemsCopy.splice(item.index,1,item)
                memoItemsCopy.splice(selectedMemoItem.index,1,selectedMemoItem)
                setMemoItems(memoItemsCopy);
                setSelectedMemoItem(null);
            }, 1000);

        }

        
        // console.log(item.memoItem.name);
    }

    return(
    <>
    <MemoTestList items={memoItems} handleClickMemoItem={handleClickMemoItem}/>

    </>)
}

export default MemoTestGameContainer;