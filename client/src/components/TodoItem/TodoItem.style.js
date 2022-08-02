const styles = {
    taskContainer: {
        justifyContent: 'center',
        display: 'flex'
    },
    styleWrapper: {
        marginBottom: 12,
        width: '80%',
        textAlign: 'center',
        alignSelf: 'center',
        borderRadius: 4,
        display: "flex",
        justifyContent: 'space-between',
        fontSize:12,
        boxShadow: '0 10px 15px 15px rgba(0,0,0,0.1)',

    },
    tasker: {
        textAlign:'right',
        textDecoration: 'none',
        paddingLeft:20,
    },
    iconWrapper: {
        paddingTop: 20
    },
    completedIcon:{
        fontSize: 15,
        paddingRight: 5,
        color: 'yellow',
        paddingBottom: 7

    },
    deletedIcon: {
        paddingLeft: 10,
        paddingRight: 20,
        fontSize: 20,
        color: 'red',
        paddingBottom: 5
    }
}

export default styles