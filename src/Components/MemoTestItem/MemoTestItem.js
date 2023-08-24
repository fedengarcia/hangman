import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core';
import { MemoTestItemStyle } from './MemoTestItemStyle';
import axios from 'axios';
import Animate from 'animate.css-react'
import { Animated } from 'react-animated-css';

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
    }, [item]);


    return(
        <div className={classes.memoItem} onClick={() => handleClickMemoItem(item)}>

                {!item.flipped &&
                <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} className={`${classes.memoItemFront}`}>
 
                </Animated>
                }

               {item.flipped &&
               <Animated animationIn="flipInY" animationOut="flipOutY" isVisible={true}>
               <div className={classes.memoItemBack}>
                    <img src={img} alt='memoimg'/>
                </div>

               </Animated> 
            }
        </div>
        )
}


export default MemoTestItem;