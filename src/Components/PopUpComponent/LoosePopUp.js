import React from 'react';
import PopUpComponent from './PopUpComponent';


const LoosePopUp = ({openLoosePopUp,setOpenLoosePopUp,setPlay}) => {


    return(<PopUpComponent
        open={openLoosePopUp}
        openDialog={setOpenLoosePopUp}
        closeDialog={() => setOpenLoosePopUp(false)}
        handleConfirm={() => setOpenLoosePopUp(false)}
        setPlay={() => setPlay(true)}
        title='PERDISTE'
        firstButton='VOLVER AL INICIO'
        secondButton='JUGAR DE NUEVO'
    >
    <h4>PERDISTE</h4>
    </PopUpComponent>)
}

export default LoosePopUp;