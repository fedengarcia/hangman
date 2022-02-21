import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core';
import { MemoTestItemStyle } from './MemoTestItemStyle';
import axios from 'axios';

const useStyles = makeStyles((theme) => MemoTestItemStyle(theme));

const MemoTestItem = ({item, handleClickMemoItem}) => {
    const [img,setImg] = useState(undefined);
    const classes = useStyles();


    useEffect(() => {
        axios.get(item.memoItem.url).then(res => {
            setImg(res.data.sprites.front_shiny);
        }).catch(err => {
            console.log('err al cargar la img')
        })


    }, []);


    return(
        <div className={classes.memoItem} onClick={() => handleClickMemoItem(item.memoItem.name)}>

                <div className={`${classes.memoItemFront} ${classes.memoItemFlipped}`} >
                </div>

               <div className={classes.memoItemBack}>
                    <img src={img} alt='memoimg'/>
                </div>

        </div>
        )
}


export default MemoTestItem;