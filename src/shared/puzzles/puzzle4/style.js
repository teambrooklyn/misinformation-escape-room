// TODO: change to props
const puzzle4 = require("../../../rooms/euphorigen/json/puzzle4.json");

const styles = () => ({
    backgroundContainer: {
        backgroundColor: "#E5E5E5",
        height: "140vh !important"
    },
    backgroundImgContainer: {
        padding: "0em 3em 4em 3em",
        background: `url(${puzzle4.images.backgroundImg})`,
        backgroundSize: "contain",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat"
    },
    contentContainer: {
        color: "black",
        backgroundColor: "#EBE1BC",
        padding: "3em 1em 3em 1em"
    },
    messageAndNodeContainer: {
        backgroundColor: "white",
        maxWidth: "700px",
        marginRight: "2em"
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
    },
    passwordForm: {
        boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
        backgroundColor: "#312700",
        width: "350px",
        height: "213px"
    }
});

export default styles;