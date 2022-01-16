import React from 'react';
import DialogComponent from './DialogComponent';

const WinDialog = ({openWinDialog,setOpenWinDialog}) => {




    return (<DialogComponent
        open={openWinDialog}
        openDialog={setOpenWinDialog}
        closeDialog={() => setOpenWinDialog(false)}
        handleConfirm={() => setOpenWinDialog(false)}

        title='VICTORIA'
        firstButton='VOLVER AL INICIO'
        secondButton='JUGAR DE NUEVO'
    >
    GANASTE
    </DialogComponent>)
}

export default WinDialog;