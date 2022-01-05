export const NotificationStyle = (theme) => ({
    notificationContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: '10px 10px 0 0',
        bottom: '-50px',
        position:'absolute',
        // transition:' transform 0.3s ease-in-out',
        // transform: 'translateY(-50px)',
        width: 'auto',
        height: 'auto',
        '& > p':{
            fontSize: '2em',
            color: 'red',
            margin: '0',
        },
    }

});