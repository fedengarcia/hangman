export const HangManGameContainerStyle = (theme) => ({
    gameContainer:{
        display:'flex',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#F3D5BD',
        height: '100vh',
        margin: 0,
        padding: 0,
        backgroundImage: 'url(/background.jpg)',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundSize: '100% 100%',
        overflow: 'hidden',

        '& > h2': {
            fontSize: '40px',
            color: '#bd784e',
            fontWeight: 'bold',
            fontFamily: 'Handjet',
            margin: '0',
            padding: '0.1em',
        }
    },
    figureWrongContainer:{
        display:'flex',
        justifyContent:'center',
        flexDirection:'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: '3em',
    },
    notificationContainer:{
        width:'100%',
        height: '4.5em',
        // backgroundColor: '#F3D5BD',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',

    }
})