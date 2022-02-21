export const MemoTestListStyle = (theme) => ({
    gameContainer:{
        width:'100%',
        height: '75vh',
        display:'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
    },
    memoBoard:{
        display:'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gridGap:'0.2em',
        width: '75%',
        height: '75vh',
        justifyItems: 'center',
    }
})
