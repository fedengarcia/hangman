import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core';
import { MemoTestItemStyle } from './MemoTestItemStyle';

const useStyles = makeStyles((theme) => MemoTestItemStyle(theme));

const MemoTestItem = ({item}) => {
    const [hiddenItem,setHiddenItem] = useState(false);
    const [visibleItem,setVisibleItem] = useState(true);
    const [allowClick,setAllowClick] = useState(true);


    const classes = useStyles();


    const handleClickItem = (name) => {
        setVisibleItem(false);
        setHiddenItem(true);
        console.log(name);
    }

    return(<>
        {allowClick && <div className={classes.itemContainer} onClick={() => handleClickItem(item.name)}>


            {visibleItem && 
                <div className={classes.visibleItem}>
                    <h1>?</h1>
                </div>
            }

            {hiddenItem && 
                <div className={classes.hiddenItem}>
                    <h1>{item.name}</h1>
                </div>
            }
            
        </div>}
        </>
        )
}


export default MemoTestItem;