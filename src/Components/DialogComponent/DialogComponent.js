import React from 'react';
import { Dialog,DialogContent,DialogTitle,DialogActions, Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import {useNavigate} from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { DialogComponentStyle } from './DialogComponentStyle';
import Slide from '@mui/material/Slide';


const useStyle = makeStyles((theme)=> DialogComponentStyle(theme));


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  

export default function DialogComponent (props) {
    const navigate = useNavigate();
    const {title,open,firstButton,secondButton,children,openDialog,closeDialog} = props;
    const classes = useStyle();

    const handleClose = () => {
        if(closeDialog){
            closeDialog();
        }
        openDialog(false);
        navigate('/');
    }

    const handleAccept = () => {
        navigate('/hangMan');
    }

    return <Dialog 
            open={open} 
            onClose={handleClose}
            TransitionComponent={Transition}
            keepMounted
            aria-describedby="alert-dialog-slide-description"
            className={classes.dialogContainer}
    >

        <DialogTitle className={classes.dialogContent}><Typography variant="h5">{title}</Typography></DialogTitle>
        <DialogContent className={classes.dialogContent}>
            <Typography variant="h6" style={{textAlign:'center'}}>{children}</Typography>
        </DialogContent>
        <DialogActions className={classes.dialogActionContainer}>
            {firstButton && <Button className={classes.button} onClick={handleClose} color='primary' variant="text" size="small"><Typography variant="h6">{firstButton}</Typography></Button>}
            {secondButton && <Button className={classes.button} onClick={handleAccept} color='primary' variant="text" size="small"><Typography variant="h6">{secondButton}</Typography></Button>}
        </DialogActions>


    </Dialog>


}