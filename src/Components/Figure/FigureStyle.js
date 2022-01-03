export const FigureStyle = (theme) => ({
    figureContainer:{
        width:'auto',
        height:'auto',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
    },
    head:{
        width:'3em',
        height:'3em',
        position:'absolute',
        left:'41.5%',
        top:'12em',
        border:'0.2em solid black',
        borderRadius:'50%',
 
    },
    body:{
        position:'absolute',
        left:'45.2%',
        top:'15.2em',
        width:'0.2em',
        height:'5em',
        backgroundColor:'black',
    },
    rightArm:{
        position:'absolute',
        left:'47.5%',
        top:'15.5em',
        width:'0.2em',
        height:'3em',
        backgroundColor:'black',
        transform: 'rotate(-40deg)'
    },
    leftArm:{
        position:'absolute',
        left:'42.9%',
        top:'15.5em',
        width:'0.2em',
        height:'3em',
        backgroundColor:'black',
        transform: 'rotate(40deg)'
    },
    rightLeg:{
        position:'absolute',
        left:'47.8%',
        top:'19.5em',
        width:'0.2em',
        height:'3.5em',
        backgroundColor:'black',
        transform: 'rotate(-40deg)'
    },
    leftLeg:{
        position:'absolute',
        left:'42.7%',
        top:'19.5em',
        width:'0.2em',
        height:'3.5em',
        backgroundColor:'black',
        transform: 'rotate(40deg)'
    },
    hangContainer:{
        width:'2em',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
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