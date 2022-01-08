export const FigureStyle = (theme) => ({
    hangContainer:{
        width:'100%',
        height: 'auto',
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
    },
    figureContainer:{
        width:'100%',
        height:'auto',
        position: 'relative',
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        alignContent: 'center',
        margin: '0',
        border: '3px solid black',
        zIndex: '1',
        flexDirection: 'column',
    },
    mastContainer:{
        width:'100%',
        display: 'flex',
        postion:'relative',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        zIndex: '-3',
    },
    head:{
        width:'3em',
        height:'3em',
        border:'0.2em solid black',
        borderRadius:'50%',
    },
    body:{
        width:'0.2em',
        height:'5em',
        backgroundColor:'black',
    },
    rightArm:{
        margin: '-4em -1em 1em 1em',
        width:'0.2em',
        height:'3em',
        backgroundColor:'black',
        transform: 'rotate(-40deg)'
    },
    leftArm:{
        margin: '-4em 3em 1em 1em',
        width:'0.2em',
        height:'3em',
        backgroundColor:'black',
        transform: 'rotate(40deg)'
    },
    rightLeg:{
        margin: '-1em -1.1em 1em 1em',
        width:'0.2em',
        height:'3.5em',
        backgroundColor:'black',
        transform: 'rotate(-40deg)'
    },
    leftLeg:{
        margin: '-4.5em 3.1em 0em 1em',
        width:'0.2em',
        height:'3.5em',
        backgroundColor:'black',
        transform: 'rotate(40deg)'
    },

    // MASTIL
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
        top: '12.2em',
        left: '53.5em',
        width: '0.2em',
        height: '1em',
        backgroundColor:'black',
    }

})