export const DialogComponentStyle = (theme) => ({
    button:{
        backgroundColor:'#bd784e',
        color:'white',
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;',
        margin: '8px',
        '&:hover':{
            color: '#aacc39',
            backgroundColor:'#bd784e',
        },

        '& > h6': {
            fontFamily: 'Handjet !important',
        }
    },
    dialogContainer:{
        fontFamily: 'Handjet !important',

        backgroundColor:'#FFD882',
        textAling:'center',
        backgroundImage: 'url(/background.jpg)',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundSize: '100% 100%',
        overflow: 'hidden',
    },
    dialogContent:{
        textAlign:'center',
        backgroundColor: '#ffffff8f',
    },
    dialogActionContainer: {
        display:'flex',
        justifyContent:'center',
        backgroundColor: '#ffffff8f',
    }
})