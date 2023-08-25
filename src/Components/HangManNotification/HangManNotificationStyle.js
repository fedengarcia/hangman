export const HangManNotificationStyle = (theme) => ({
    notificationContainer: {
        backgroundColor: '#F3D5BD',
        borderRadius: '8px',
        marginBottom: '2em',
        bottom: '-50px',
        position:'absolute',
        transition:' transform 0.3s ease-in-out',
        transform: 'translateY(-50px)',
        boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;',

        width: 'auto',
        height: 'auto',
        '& > p':{
            fontSize: '40px',
            color: '#bd784e',
            fontWeight: 'bold',
            fontFamily: 'Handjet',
            margin: '0',
            padding: '0.1em 0.4em',
        },
    }

});