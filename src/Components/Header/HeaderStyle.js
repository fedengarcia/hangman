
export const HeaderStyle = (theme) => ({
    headerContainer:{ 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        
        '& > h1':{
            fontSize: '2em',
            textShadow: '3px 3px 7px #1519BC',
            fontFamily: 'Arimo, sans-serif',
            padding: '1em',
        }
    },
    arrowBackIconContainer:{
        display: 'flex',
        position: 'absolute',
        left: '2em',
        width: 'auto',
        zIndex: '2'
    },
    arrowBackIcon:{
        borderRadius: '10em',
        border: '1px solid black',
        boxShadow: '1px 2px black',
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