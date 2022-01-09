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
        width:'25%',
        height:'25%',
        margin: '-0.2em -10.6em 1em 1em',
        position: 'absolute',
        display: 'flex',
        justifyContent:'flex-start',
        alignItems:'center',
        alignContent: 'center',
        flexDirection: 'column',
        zIndex: '1',
    },
    mastContainer:{
        width:'100%',
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        alignContent: 'center',
        flexDirection:'column',
        zIndex: '0',
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
        zIndex: '0',
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
        margin: '-14em -11.6em 0em 0em',
        width: '0.2em',
        height: '1em',
        backgroundColor:'black',
        zIndex: '1'
    }

})