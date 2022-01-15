import React from 'react';
import PopUpComponent from './PopUpComponent';

const WinPopUp = ({openWinPopUp,setOpenWinPopUp,setPlay}) => {




    return (<PopUpComponent
        open={openWinPopUp}
        openDialog={setOpenWinPopUp}
        closeDialog={() => setOpenWinPopUp(false)}
        handleConfirm={() => setOpenWinPopUp(false)}
        setPlay={() => setPlay(true)}
        title='VICTORIA'
        firstButton='VOLVER AL INICIO'
        secondButton='JUGAR DE NUEVO'
    >
    <h4>GANASTE!</h4>   
    </PopUpComponent>)
}

export default WinPopUp;