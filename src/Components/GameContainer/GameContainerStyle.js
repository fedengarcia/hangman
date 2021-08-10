export const GameContainerStyle = (theme) => ({
    gameContainer:{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: 'auto',
        '& > div:first-child':{
            display:'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
            marginBottom: '1em',
            height:'auto',
            width:'50%',
        }
    }
})