// TODO: change to props
const puzzle1 = require("../../../rooms/euphorigen/json/puzzle1.json");

const styles = () => ({
    background: {
        padding: "6em 5em 0em 5em",
        backgroundImage:`url("${puzzle1.background}")`,
        backgroundPosition:"center center",
        backgroundRepeat: "no-repeat",
    },
    alert: {
        position: "relative",
        top: "105px",
        marginRight: "20px",
        backgroundColor: "#FFE790",
        boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)"
    },
    passwordForm: {
        position: "relative",
        top: "105px",
        boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
        backgroundColor: "#FFE790"
    },
    lightsIcon: {
        position: "relative",
        top: "5px"
      },
    tackBoardContainer: {
        height:"150px",
        // margin left and right are set to be a particular value to allow the blue and grey pin to overlap perfectly.
        marginLeft: "40px",
        marginRight: "40px",
    },
    notePrompt: {
        width: "900px",
        fontFamily: "Roboto",
        fontSize: "22px",
        color: "#131CA4"
    },
    bluePinContainer: {
        width: "100%",
        paddingTop:"18px",
        paddingBottom:"10px"
    },
    bluePin: {
        borderRadius:"50px",
        width:"33px",
        height:"33px",
        zIndex:"1000",
        background: "#131CA4",
        opacity: "0.4"
    },
    textMarkContainer: {
        height: "50px",
        width: "800px",
        // margin bottom is set to be a particular value to allow the blue and grey pin to overlap perfectly.
        marginBottom: "8px",
        textAlign: "flex-start",
        alignItems: "flex-start",
    },
    textMark: {
        fontSize:"17px",
        textAlign:"left",
        position:"relative",
        cursor:"default",
        zIndex:"1002",
        fontFamily:"'Roboto', monospace",
        pointerEvents:"none",
        paddingLeft:"25px",
        paddingRight:"25px"
    }
  });

  export default styles;
