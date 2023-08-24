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
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;',
        display:'grid',
        gridTemplateColumns: 'repeat(4,4fr)',
        backgroundColor: '#ffffff8f',
        borderRadius: '8px',
        padding: '2em 0',
        marginBottom: '2em',
        gridGap:'0.5em',
        width: '50%',
        height: '70vh',
        justifyItems: 'center',
    }
})
