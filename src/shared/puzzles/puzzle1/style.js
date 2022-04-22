// TODO: change to props
const puzzle5 = require("../../../rooms/euphorigen/json/puzzle5.json");

const styles = () => ({
  background: {
    backgroundColor: "#E5E5E5",
    height: "100vh !important"
  },
  backgroundImg: {
    padding: "4em 4em 8em 4em",
    background: `url(${puzzle5.background})`,
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  },
  content: {
    margin: "-2em -2em 0 0"
  },
  messageNote: {
    background: `url(${puzzle5.panel})`,
    width: "304px",
    height: "234px",
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    fontFamily: "Helvetica Neue",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "25px",
    letterSpacing: "0.07px",
    marginRight: "-3em",
    marginTop: "-18em",
    marginLeft: "4em",
    zIndex: "1"
  },
  window: {
    background: `url(${puzzle5.siteBg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top",
    width: "770px",
    height: "729px",
    position: "relative"
  },
  galleryContainer: {
    position: "absolute",
    top: "55px",
    left: "50px",
  },
  postOne: {
    background: `url(${puzzle5.postBox})`,
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    width: "570px",
    height: "143px",
    position: "absolute",
    top: "180px",
    left: "46px",
  },
  postOneTextBox: {
    position: "absolute",
    top: "20px",
    right: "10px",
    width: "470px",
    fontFamily: "Helvetica Neue",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "15px",
    lineHeight: "25px",
  },
  postTwo: {
    position: "absolute",
    top: "330px",
    left: "50px",
    background: `url(${puzzle5.postImg})`,
    backgroundPosition: "left top",
    backgroundRepeat: "no-repeat",
    width: "1000px",
    height: "390px",
  },
  postTwoTextBox: {
    position: "absolute",
    top: "20px",
    left: "80px",
    width: "420px",
    fontFamily: "Helvetica Neue",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "15px",
    lineHeight: "25px",
  },
  imageContainer: {
    position: "absolute",
    top: "150px",
    left: "20px",
  },
  textField: {
    width:"100px",
    height: "2px",
    marginTop:"-13px"
  },
  passwordForm: {
    backgroundColor: "rgba(112, 112, 112, 0.5)",
    borderRadius: "14px",
    backgroundBlendMode: "luminosity",
    padding: "1em 1em 1em 1em",
    position: "absolute",
    top: "73vh"
  },
  callContainer: {
    position: "absolute",
    top: "13vh"
  },
  phoneNumberText: {
    fontSize: "17.5px",
    position: "relative",
    top: "1.6vh",
    left: "24vh",
    fontWeight: "500",
  },
  locationText: {
    fontSize: "13px",
    color: "#8A8A8D",
    position: "relative",
    top: "1.25vh",
    left: "24vh",
  },
  dayText: {
    fontSize: "13px",
    color: "#8A8A8D",
    position: "relative",
    top: "2vh",
    right: "-37vh",
  },
  timeText: {
    fontSize: "13px",
    color: "#8A8A8D",
    position: "relative",
    top: "2vh",
    right: "-39vh",
    letterSpacing: "1.5px"
  },
  infoIcon: {
    position: "relative",
    top: "1.5vh",
    right: "-37vh",
  },
  voicemailContainer: {
    height: "7.8vh"
  },
  voicemailPopup: {
    background: `url(${puzzle5.popup})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    width: "450px",
    height: "500px",
  }
  });

  export default styles;