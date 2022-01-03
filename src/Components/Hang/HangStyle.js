export const HangStyle = (theme) => ({
    hangContainer:{
        width:'2em',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        zIndex: '-1'
    },
    floor:{
        width: '6em',
        height: '0.2em',
        backgroundColor:'black',
    },
    mast:{
        width:'0.2em',
        height:'15em',
        backgroundColor:'black',
    },
    roof:{
        position:'relative',
        left:'2.9em',
        width: '6em',
        height: '0.2em',
        backgroundColor:'black',
    },
    rope:{
        position:'absolute',
        left:'52.2em',
        top:'14.2em',
        width: '0.2em',
        height: '1em',
        backgroundColor:'black',
        
    }
})