// TODO: change to props
const puzzle3 = require("../../../rooms/euphorigen/json/puzzle3.json");

const styles = () => ({
    backgroundContainer: {
        backgroundColor: "#E5E5E5",
        height: "140vh !important"
    },
    backgroundImgContainer: {
        padding: "0em 3em 4em 3em",
        background: `url(${puzzle3.images.backgroundImg})`,
        backgroundSize: "contain",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat"
    },
    contentContainer: {
        color: "#0085C7",
        backgroundColor: "white",
        padding: "3em 1em 3em 1em"
    },
    messageAndNodeContainer: {
        maxWidth: "700px",
        marginRight: "2em"
    },
    message: {
        color: "white",
        backgroundColor: "#0085C7",
        boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
        width: "558px",
        fontFamily: "Helvetica Neue",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "18px",
        lineHeight: "25px",
    },
    passwordAndPromptContainer: {
        maxWidth: "600px"
    },
    textField: {
        width:"40px",
        margin: "-6px 10px 0px 10px"
    },
    redText: {
        fontFamily: 'Helvetica Neue',
        fontWeight: "bold",
        color: "#0085C7"
    },
    textContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    passwordForm: {
        boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
        backgroundColor: "#0085C7",
        width: "350px",
        height: "213px"
    }
});

export default styles;