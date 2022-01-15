import React,{useState, useEffect} from 'react';
import WinPopUp from '../PopUpComponent/WinPopUp';
import LoosePopUp from '../PopUpComponent/LoosePopUp';

export default function DialogContainer ({setPlay, gameResult}) { 
    const [openLoosePopUp, setOpenLoosePopUp] = useState(false);
    const [openWinPopUp, setOpenWinPopUp] = useState(false);



    useEffect(() => {
       if(gameResult === false){
            setOpenLoosePopUp(true);
            setPlay(false);
        }else{
            setOpenWinPopUp(true);
            setPlay(false);
        }
    }, [setPlay,gameResult]);


    
    return <>

        {openLoosePopUp && LoosePopUp({openLoosePopUp,setOpenLoosePopUp})}
        {openWinPopUp && WinPopUp({openWinPopUp,setOpenWinPopUp})}

    </>

}