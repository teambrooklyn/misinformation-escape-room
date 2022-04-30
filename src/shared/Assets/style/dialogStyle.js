
import { getWithExpiry } from "@/shared/UtilityFunctions";

const public_url = process.env.PUBLIC_URL;

const level = parseInt(getWithExpiry("level"))

const styles = (theme) => ({
    backgroundContainer: {
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center center",
        width: "500px",
        height: "600px",
        position: "relative",
        borderRadius: "60px",
    },
    textbox: {
        position: "absolute",
        width: "220px",
        top: "85px",
        left: "132px",
        fontFamily: "Helvetica Neue",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "12px",
        lineHeight: "15px",
        whiteSpace: "pre-wrap",
    },
    nextButton: {
        width: "146px",
        height: "46px",
        background: "#FFFFFF",
        borderRadius: "25px",
        fontFamily: "Helvetica Neue",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "20px",
        lineHeight: "24px",
    },
    closeDialogButton: {
        width: "20px",
        height: "20px",
        textAlign: "center",
        position: "relative",
        top: "-24.9em",
        right: "14.1em",
        color: "#FFFFFF",
        background: "#377AF6",
        borderStyle: "hidden",
        borderRadius: "10px",
        fontSize: "10px",
        cursor: "pointer"
    }
});

export default styles;
