import React,{useState, useEffect} from 'react';
import WinDialog from '../DialogComponent/WinDialog';
import LoseDialog from '../DialogComponent/LoseDialog';
import {useParams} from 'react-router-dom';

export default function PopUpContainer () { 
    const [openLoseDialog, setOpenLoseDialog] = useState(false);
    const [openWinDialog, setOpenWinDialog] = useState(false);
    const {dialogType} = useParams();


    useEffect(() => {
        if(dialogType !== undefined){
            if(dialogType === "winDialog"){
                setOpenWinDialog(true);
            }
            if(dialogType === "loseDialog"){
                setOpenWinDialog(true);
            }
            
        }
    }, [dialogType]);


    
    return <>

        {openLoseDialog && LoseDialog({openLoseDialog,setOpenLoseDialog})}
        {openWinDialog && WinDialog({openWinDialog,setOpenWinDialog})}

    </>

}