// TODO: change to props
const puzzle3 = require("../../../rooms/euphorigen/json/puzzle3.json");

const styles = () => ({
  background: {
    backgroundColor: "#E5E5E5"
    // height: "100vh !important"
  },
  backgroundImg: {
    padding: "4em 4em 8em 4em",
    background: `url(${puzzle3.background})`,
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    position:"relative"
  },
  content: {
    margin: "-2em -2em 0 0"
  },
  window: {
    width: "770px",
    height: "729px",
    position: "relative"
  },
  callout: {
    position:"relative",
    left:"30rem"
  },

  instructions: {
    width: "350px",
    background: "rgba(112, 112, 112, 0.5)",
    boxShadow: "0px 1px 20px rgba(0, 0, 0, 0.15)",
    padding: "1.5em 1.5em 1.5em 1.5em",
    borderRadius: "15px",
    border: "none",
    color: "black",
    fontSize: "1rem",
    position: "relative",
    top: "18em",
    left: "-25em"
  },
  close:{
    position:"relative",
    top:"100px"
  },

  formButton: {
    width: "280px",
    background: "rgba(112, 112, 112, 0.5)",
    boxShadow: "0px 1px 20px rgba(0, 0, 0, 0.15)",
    borderRadius: "15px",
    border: "none",
    color: "#0085C7",
    cursor: "pointer",
    fontSize: "1.5rem",
    position: "relative",
    top: "-7em"
  },
  passwordForm: {
    backgroundColor: "rgba(112, 112, 112, 0.5)",
    borderRadius: "14px",
    backgroundBlendMode: "luminosity",
    color: "#0085C7",
    padding: "1em 1em 1em 1em",
    position: "relative",
    top: "-9.5em"
  },
  callContainer: {
    position: "relative",
    top: "-180px",
    left:"37px",
    paddingTop:"3.3rem"
  },
  voicemailContainer: {
    height: "3.25em",
    paddingTop:"0em",
    marginBottom:"0.75rem"
  },
  phoneNumberText: {
    fontSize: "17.5px",
    position: "relative",
    top: "1em",
    left: "9.5em",
    fontWeight: "500",
  },
  locationText: {
    fontSize: "13px",
    color: "#8A8A8D",
    position: "relative",
    top: "1.3em",
    left: "13em",
  },
  dayText: {
    fontSize: "13px",
    color: "#8A8A8D",
    position: "relative",
    top: "1.3em",
    right: "-20em",
  },
  timeText: {
    fontSize: "13px",
    color: "#8A8A8D",
    position: "relative",
    top: "1.3em",
    right: "-21em",
    letterSpacing: "1.5px"
  },
  infoIcon: {
    position: "relative",
    top: "0.6em",
    right: "-10.7em"
  },
  voicemailPopup: {
    background: `url(${puzzle3.popup})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    padding: "1.5em 1.5em 1.5em 1.5em",
    width: "450px"
  },
  phoneNumberTextPopUp: {
    fontSize: "17.5px",
    fontWeight: "500"
  },
  locationTextPopUp: {
    fontSize: "13px",
    color: "#8A8A8D"
  },
  dayTextPopUp: {
    fontSize: "13px",
    color: "#626262"
  },
  transcriptionTitleText: {
    fontSize: "16px",
    fontWeight: "550"
  },
  transcriptionText: {
    fontSize: "16px",
    color: "#626262"
  }

  
});
export default styles;