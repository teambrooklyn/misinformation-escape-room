
// TODO: change to props
const puzzle2 = require("../../../rooms/euphorigen/json/puzzle2.json");

const styles = () => ({
  backgroundContainer: {
    height: "122vh !important",
    background: `url(${puzzle2.images.backgroundImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center top"
  },
  messageContainer: {
    width: "500px",
    height: "180px",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: "20px"
  },
  passwordFormContainer: {
    width: "500px",
    marginLeft: "2em",
    marginRight: "1em",
    position: "relative",
  },
  promptContainer: {
    width: "800px",
    position: "relative",
  },
  textContainer: {
    background: "rgba(255, 255, 255, 0.5)",
    boxShadow: "0px 1px 20px rgba(0, 0, 0, 0.1)",
    borderRadius: "25px",
    padding: "20px",
    margin: "30px 0px 0px 0px",
    color: "#0085C7"
  },
  textField: {
    float: "left",
    width: "110px",
    height: "55px",
    marginTop: "3px",
    marginLeft: "10px",
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: "4px"
  },
  formButton: {
    width: "500px",
    height: "116px",
    background: "#0085C7",
    boxShadow: "0px 1px 20px rgba(0, 0, 0, 0.15)",
    borderRadius: "15px",
    border: "none",
    color: "white",
    cursor: "pointer",
    fontSize:"1.5rem",
    position: "relative",
    top: "10px"
  },
  pfp : {
    width: "35px",
    height: "35px",
    marginLeft: "12px",
    marginTop: "12px",
    float: "left"
  },
  logo : {
    width: "25px",
    height: "25px",
    marginLeft: "10px",
    marginTop: "7px",
    float: "left"
  },
  messageText : {
    color: "grey",
    float: "left",
    marginLeft: "7px",
    marginTop: "7px",
    fontSize: "20px",
    fontWeight: "500"
  },
  bodyText : {
    fontSize: "19px",
    color: "black",
    margin: "40px 10px 0 10px"
  }
});

export default styles;
