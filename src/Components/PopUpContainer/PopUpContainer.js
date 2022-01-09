import React,{useState, useEffect} from 'react';


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

        {openLoosePopUp && LoosePopUp({setPlay})}
        {openWinPopUp && WinPopUp({setPlay})}

    </>

}