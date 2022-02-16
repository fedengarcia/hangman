export const HangManGameContainerStyle = (theme) => ({
    gameContainer:{
        display:'flex',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#F1C35C',
        height: '100vh',
        margin: 0,
        padding: 0,
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
        backgroundColor: '#F1C35C',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',

    }
})