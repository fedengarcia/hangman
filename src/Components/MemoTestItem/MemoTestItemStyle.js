export const MemoTestItemStyle = (theme) => ({
    memoItem:{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        overflow: 'hidden',
        width:'60%',
        height: '100%',
        borderRadius: '8px',
        boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;',

        '&: hover': {
            boxShadow: 'rgba(255, 255, 255, 0.07) 0px 1px 1px, rgba(255, 255, 255, 0.07) 0px 2px 2px, rgba(255, 255, 255, 0.07) 0px 4px 4px, rgba(255, 255, 255, 0.07) 0px 8px 8px, rgba(255, 255, 255, 0.07) 0px 16px 16px;',
        }
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
