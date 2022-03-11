
// TODO: change to props
const puzzle2 = require("../../../rooms/euphorigen/json/puzzle2.json");

const styles = () => ({
  backgroundContainer: {
    backgroundColor: `${puzzle2.backgroundColor}`,
    height: "120vh !important",
  },
  backgroundImgContainer: {
    //margin: "2em 4em 2em 4em",
    background: `url(${puzzle2.images.backgroundImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center top",
    padding: "3em 5em 9em 5em"
  },
  timeAndMessageContainer: {
    height: "100px",
    marginBottom: "1em",
    marginTop: ".5em"
  },
  timeContainer: {
    textAlign: "left",  zmarginRight: "100px"
  },
  messageContainer: {
    width: "500px",
    height: "125px",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: "10px"
  },
  passwordFormContainer: {
    width: "280px",
    marginLeft: "2em",
    marginRight: "1em"
  },
  promptContainer: {
    width: "700px",
  },
  textContainer: {
    background: "rgba(255, 255, 255, 0.5)",
    boxShadow: "0px 1px 20px rgba(0, 0, 0, 0.1)",
    borderRadius: "25px",
    padding: "20px",
    margin: "30px 0px 30px 0px"
  },
  formButton: {
    width: "257px",
    height: "116px",
    background: "#0085C7",
    boxShadow: "0px 1px 20px rgba(0, 0, 0, 0.15)",
    borderRadius: "15px",
    border: "none",
    color: "white",
    cursor: "pointer"
  },
  textField: {
    float:"left",
    width:"60px",
    marginTop:"3px",
    marginRight:"20px"
  },
  logo : {
    width: "20px",
    height: "20px",
    marginLeft: "10px",
    marginTop: "10px",
    float: "left"
  },
  messageText : {
    color: "grey",
    float: "left",
    marginLeft: "10px",
    marginTop: "13px",
    fontSize: "12px"
  },
  bodyText : {
    fontSize: "15px",
    color: "black",
    margin: "40px 10px 0 10px",
  },
  fromText: {
    color: "rgb(245, 245, 245)",
    marginLeft: "1vh",
    marginTop: "3.6vh",
    fontWeight: "500",
    fontSize: "1.6vh"
  },
});

export default styles;
