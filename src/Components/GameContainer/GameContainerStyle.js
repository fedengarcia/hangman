export const GameContainerStyle = (theme) => ({
    gameContainer:{
        height: '100vh',
        width: '100%',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',

    },
    games:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid black',
        borderRadius: '1em',
        '& > h1':{
            padding: '2em 4em',
        }
    },
    button:{
        margin: '0 2em 2em 2em',
        width: '10em',
        '&:hover':{
            color:'red',
            opacity: '0.9',
        }
    },
    linkStyle:{
        textDecoration: "none",
      },
});