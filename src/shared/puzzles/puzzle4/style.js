// TODO: change to props
const puzzle4 = require("../../../rooms/euphorigen/json/puzzle4.json");

const styles = () => ({
    backgroundImgContainer: {
        height: "70em !important",
        padding: "0em 3em 4em 3em",
        background: `url(${puzzle4.background})`,
        backgroundSize: "contain",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat"
    },
    contentContainer: {
        color: "black",
        padding: "3em 0em 3em 2em"
    },
    messageAndNodeContainer: {
        backgroundColor: "white",
        maxWidth: "750px",
        marginRight: "2em",
        borderRadius: "20px",
        position:"relative",
        top:"-1.75em"
    },
    message: {
        color: "black",
        backgroundColor: "white",
        width: "558px",
        fontFamily: "Helvetica Neue",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "18px",
        lineHeight: "25px",
        marginTop: "10px"
    },
    passwordAndPromptContainer: {
        maxWidth: "600px"
    },
    textField: {
        width: "40px",
        margin: "-6px 10px 0px 10px"
    },
    redText: {
        fontFamily: 'Helvetica Neue',
        fontWeight: "bold",
        color: "black"
    },
    textContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"white",
        borderRadius: "20px",
        padding:"1em 1em 0em 1em",
        marginBottom:"1.5em",
        position:"relative",

    },
    passwordForm: {
        boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
        backgroundColor: "#312700",
        width: "100%",
        height: "213px",
        borderRadius: "20px"
    }
});

export default styles;