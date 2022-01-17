export const NotificationStyle = (theme) => ({
    notificationContainer: {
        backgroundColor: '#CA8B41',
        borderRadius: '10px 10px 0 0',
        bottom: '-50px',
        position:'absolute',
        transition:' transform 0.3s ease-in-out',
        transform: 'translateY(-50px)',
        width: 'auto',
        height: 'auto',
        '& > p':{
            fontSize: '2.5em',
            color: 'white',
            margin: '0',
            padding: '0.08em',
        },
    }

});