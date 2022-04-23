// TODO: change to props
const puzzle1 = require("../../../rooms/euphorigen/json/puzzle1.json");

const styles = () => ({
    background: {
        padding: "6em 5em 10em 5em",
        backgroundImage:`url("${puzzle1.background}")`,
        backgroundPosition:"center center",
        backgroundRepeat: "no-repeat",
    },
    alert: {
        marginTop:"10px",
        marginBottom:"20px",
        marginRight: "20px",
        backgroundColor: "#FFE790",
        boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)"
    },
    passwordForm: {
        boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
        backgroundColor: "#FFE790"
    },
    tackBoardContainer: {
        height:"285px",
        // margin left and right are set to be a particular value to allow the blue and grey pin to overlap perfectly.
        marginLeft:"33px",
        marginRight:"36px"
    },
    notePrompt: {
        textAlign:"center",
        width:"300px",
        marginLeft:"auto",
        marginRight:"auto",
        fontFamily:"sans-serif",
        fontSize:"18px",
        marginBottom:"15px",
        fontWeight:"500",
        minHeight: "54px"
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
        background: "#77a9f2"
    },
    textMarkContainer: {
        width: "300px",
        height: "200px",
        // margin bottom is set to be a particular value to allow the blue and grey pin to overlap perfectly.
        marginBottom:"3px",
        textAlign:"center",
        alignItems:"center",
        marginLeft:"auto",
        marginRight:"auto"
    },
    textMark: {
        fontSize:"17px",
        textAlign:"left",
        position:"relative",
        cursor:"default",
        zIndex:"1002",
        fontFamily:"'Courier Prime', monospace",
        pointerEvents:"none",
        paddingLeft:"25px",
        paddingRight:"25px"
    }
  });

  export default styles;
