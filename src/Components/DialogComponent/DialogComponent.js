import React from 'react';
import { Dialog,DialogContent,DialogTitle,DialogActions } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Children } from 'react';
import {useHistory} from 'react-router-dom';



export default function DialogComponent (props) {
    const history = useHistory();
    const {title,open,firstButton,secondButton,openDialog,closeDialog} = props;

    const handleClose = () => {
        if(closeDialog){
            closeDialog();
        }
        openDialog(false);
        history.push('/');
    }

    const handleAccept = () => {
        history.push('/');
    }

    return <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
            {Children}
        </DialogContent>
        <DialogActions style={{display:'flex', justifyContent:'center'}}>
            {firstButton && <Button onClick={handleClose} color='primary'>{firstButton}</Button>}
            {secondButton && <Button onClick={handleAccept} color='primary'>{secondButton}</Button>}
        </DialogActions>


    </Dialog>
}