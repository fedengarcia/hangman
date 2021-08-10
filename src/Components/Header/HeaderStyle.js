
export const HeaderStyle = (theme) => ({
    headerContainer:{ 
        display: 'flex',
        justifyContent: 'center',
        aligItems: 'center',
        flexDirection: 'column',

        '& > h1, p':{
            fontFamily: 'Arimo, sans-serif'
        },
        
        '& > h1':{
            fontSize: '3em',
            textShadow: '3px 3px 7px #1519BC',
        }
    },
});