import React,{useState,useContext} from 'react';
import { makeStyles } from '@material-ui/core';
import { MemoTestItemStyle } from './MemoTestItemStyle';

const useStyles = makeStyles((theme) => MemoTestItemStyle(theme));

const MemoTestItem = ({item}) => {
    const [hiddenItem,setHiddenItem] = useState(false);
    const [visibleItem,setVisibleItem] = useState(true);
    const [allowClick,setAllowClick] = useState(true);

    console.log(item.memoItem.url)
    const classes = useStyles();


    const handleClickItem = (name) => {
        console.log("CLICKEASTE --->", name);
        setVisibleItem(false);
        setHiddenItem(true);
    }

    return(
        <div className={classes.memoItem}>

                <div className={`${classes.memoItemFront} ${classes.memoItemFlipped}`} onClick={() => handleClickItem(item.memoItem.name)}>
                </div>

                <div className={classes.memoItemBack}>
                    <img src={item.memoItem.url} alt='memoimg'/>
                    <h1>{item.memoItem.name}</h1>
                </div>

        </div>
        )
}


export default MemoTestItem;