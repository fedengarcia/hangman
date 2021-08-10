export const HangStyle = (theme) => ({
    hangContainer:{
        width:'2em',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
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
        '& > div':{
            width: '6em',
            height: '0.2em',
            backgroundColor:'black',
        }
    },
    rope:{
        position:'absolute',
        left:'18.6em',
        top:'11.1em',
        '& > div':{
            width: '0.2em',
            height: '1em',
            backgroundColor:'black',
        }
    }
})