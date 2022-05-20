import { green } from "@material-ui/core/colors";

const public_url = ""; //process.env.PUBLIC_URL;

const styles = (theme) => ({
  deviceContainer: {
      backgroundImage: `url(${public_url}/images/message/dialog_devices/facebook.svg)`,
      backgroundPosition: "center center",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      width: "100%",
      height: "100vh"
  },
  wrapper: {
    minWidth: "100%",
    position: "relative",
  },
  buttonSuccess: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
  linearProgress: {
    opacity: 0.7,
    marginTop: "15px",
    marginBottom: "-8px",
    marginRight: "80px",
    marginLeft: "80px"
  },
  images: {
    objectFit: "scale-down",
    width: "100%",
  },
  flavorText: {
    paddingTop: "3rem",
    lineHeight: "3rem",
    color: "#FFFFFF",
    textAlign: "center",
  },
  alert  : {
    marginBottom: "15px", 
    alignItems: "center",
    height: "5vh",
    fontSize: "1.7vh"
  },
  lines : {
    color: "#000000",
    width: "57%",
    opacity: ".40"
  },
  icons : {
    color: "#000000",
  },
  clickedicons : {
    color: "#0084ff",
  },
  icontext : {
    color: "#000000",
    marginLeft: "5px",
    fontSize: "20px"
  },
  clickedicontext: {
    color: "#0084ff",
    marginLeft: "5px",
    fontSize: "20px"
  },
  reply : {
    color: "#000000",
    transform: "scaleX(-1)"
  },
  iconbutton: {
    minWidth: "14vw"
  },
  replydisabled: {
    color: "gray",
    transform: "scaleX(-1)"
  },
  icontextdisabled: {
    color: "gray",
    marginLeft: "5px",
    fontSize: "20px"
  },
  placeholder: {
    height: "2px"
  },
  thoughtBubble: {
    position: "absolute",
    textAlign: "center",
    backgroundImage: `url(${public_url}/images/message/thought_bubble.svg)`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "700px",
    width: "800px"
  },
  thoughtBubbleText: {
    width: "400px",
    marginTop: "210px",
    marginLeft: "190px",
  }
});

export default styles;
