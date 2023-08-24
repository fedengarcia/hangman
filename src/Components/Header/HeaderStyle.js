
export const HeaderStyle = (theme) => ({
    headerContainer:{ 
        padding: '2em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        
        '& > h1':{
            fontSize: '5vw',
            color: '#bd784e',
            fontFamily: 'Handjet',
            textShadow: '3px 3px 7px #bd784e',
        }
    },
    arrowBackIconContainer:{
        display: 'flex',
        position: 'absolute',
        left: '2em',
        width: 'auto',
        zIndex: '2',
    },
    arrowBackIcon:{
        backgroundColor: 'white',
        borderRadius: '10em',
        border: '1px solid #bd784e',
        color: '#bd784e',
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;',
        '&:hover':{
            transition: '0.1s ease',
            cursor:'pointer',
        },
        '&:active':{
            boxShadow: '0 0.5px black',
            transform: 'translateY(4px)',
        },
    }


      
});