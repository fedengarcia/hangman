export const WordStyles = (theme) => ({
    hiddenWordContainer:{
        width:'auto',
        height: 'auto',
        boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;',
        backgroundColor: '#ffffff8f',
        border: '1px solid #9ea8aa',

    },
    WrongLettersContainer:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontFamily: 'Handjet',
        fontSize: '40px',
        color: '#bd784e',
        fontWeight: 'bold',
    },
    letter:{
        borderBottom: '5px solid #9ea8aa',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0.1em',
        height: '1em',
        width: '1em',
        fontFamily: 'Handjet',
        fontSize: '40px',
        color: '#bd784e',
        fontWeight: 'bold',
    }
})