export const GameContainerStyle = (theme) => ({
    gameContainer:{
        height: '100vh',
        width: '100%',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundImage: 'url(/background.jpg)',

        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundSize: '100% 100%'
    },
    games:{
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;',
        backgroundColor: '#ffffff8f',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '1em',
        transition: 'box-shadow 0.1s ease-in',
        color: '#bd784e',
        '& > h1':{
            padding: '1em 2em',
            fontFamily: 'Handjet',
            fontSize: '60px',
        },
        '&:hover': {
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;',
            // backgroundColor: '#ffffff',
        }
    },
    button:{
        fontFamily: 'Handjet',
        fontWeight: 'bold',
        fontSize: '1.2vw',
        margin: '0 2em 2em 2em',
        width: '10em',
        '&:hover':{
            color:'#aacc39',
            opacity: '1',
        }
    },
    linkStyle:{
        textDecoration: "none",
      },
});