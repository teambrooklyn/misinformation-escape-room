const styles = (theme) => ({
    imessage : {
        width: "60vh",
        //minHeight: "100px",
        backgroundColor: "rgb(12, 12, 12)",
        position: "absolute",
        borderRadius: "1vh",
        top: "9vh",
        right: "20vw",
        zIndex: "999"
    },

    logo : {
        width: "1.9vh",
        height: "1.9vh",
        marginLeft: ".9vh",
        marginTop: ".9vh",
        float: "left"
    },

    messageText : {
        color: "grey",
        float: "left",
        marginLeft: ".9vh",
        marginTop: ".8vh",
        fontSize: "1.6vh"
    },

    fromText: {
        color: "rgb(245, 245, 245)",
        marginLeft: "1vh",
        marginTop: "3.6vh",
        fontWeight: "500",
        fontSize: "1.6vh"
    },

    bodyText : {
        color: "rgb(230, 230, 230)",
        marginLeft: "1vh",
        paddingRight: ".5vh",
        marginBottom: "1.2vh",
        marginTop: ".2vh",
        fontSize: "1.6vh"
    }
  });
  
  export default styles;