export const MemoTestListStyle = (theme) => ({
    gameContainer:{
        width:'100%',
        height: '100vh',
        display:'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundImage: 'url(/background.jpg)',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundSize: '100% 100%',
        overflow: 'hidden',
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
