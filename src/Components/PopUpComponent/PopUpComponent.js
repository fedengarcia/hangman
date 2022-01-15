import React from 'react';
import { Dialog,DialogContent,DialogTitle,DialogActions } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Children } from 'react';


export default function PopUpComponent (props) {

    const {title,open,firstButton,secondButton,openDialog,closeDialog,handlePlayAgain} = props;

    const handleClose = () => {
        if(closeDialog){
            closeDialog();
        }
        openDialog(false);
    }

    const handleAccept = () => {
        if(handlePlayAgain){
            handlePlayAgain();
        }
    }

    return <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
            {Children}
        </DialogContent>
        <DialogActions style={{display:'flex', justifyContent:'center'}}>
            {firstButton && <Button onClicl={handleClose} color='primary'>{firstButton}</Button>}
            {secondButton && <Button onClicl={handleAccept} color='primary'>{secondButton}</Button>}
        </DialogActions>


    </Dialog>
}