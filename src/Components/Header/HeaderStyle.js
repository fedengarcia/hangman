
export const HeaderStyle = (theme) => ({
    headerContainer:{ 
        display: 'flex',
        justifyContent: 'center',
        aligItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#F1C35C',

        
        '& > h1':{
            fontSize: '2em',
            textShadow: '3px 3px 7px #1519BC',
            fontFamily: 'Arimo, sans-serif'
        }
    },
});