export const MemoTestItemStyle = (theme) => ({
    memoItem:{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        overflow: 'hidden',
        width:'60%',
        height: '100%',
    },
    memoItemFront:{
        overflow: 'hidden',
        height: '150px',
        width: '150px',
        // borderRadius: 'em',
        backgroundColor: '#914d17',
        boxShadow: 'rgba(0, 0, 0, 0.18) 0px 2px 4px',
    },
    memoItemBack:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#619202',
        height: '150px',
        width: '150px',
        borderRadius: '1em',
        opacity: '0.8',
        boxShadow: 'rgba(0, 0, 0, 0.18) 0px 2px 4px',
        '& > img': {
            width: '200px',
        }

    },
})
