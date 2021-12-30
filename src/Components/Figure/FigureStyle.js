export const FigureStyle = (theme) => ({
    figureContainer:{
        width:'50px',
        height:'50px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        backgroundColor: 'grey',

    },
    head:{
        width:'auto',
        height:'auto',
        position:'absolute',
        left:'41.5%',
        top:'12em',
        border:'0.2em solid black',
        borderRadius:'50%',
        "& > div":{
            width:'3em',
            height:'3em',
        }
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

})