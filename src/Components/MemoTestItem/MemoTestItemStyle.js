export const MemoTestItemStyle = (theme) => ({
    itemContainer:{
        width:'100%',
        height: 'auto',
        display:'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
    },
    visibleItem:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        height: '5em',
        width: '5em',
        cursor: 'pointer',
        backgroundColor: 'red',
    },
    hiddenItem:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        height: '5em',
        width: '5em',
        cursor: 'pointer',
    }
})
