
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
    }
});