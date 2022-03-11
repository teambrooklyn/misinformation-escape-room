import { green } from "@material-ui/core/colors";

const public_url = process.env.PUBLIC_URL;

const styles = (theme) => ({
  deviceContainer: {
      backgroundImage: `url(${public_url}/images/room/room.png)`,
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      width: "100vw",
      height: "100vh",
      padding: "2vw"
  },
  deviceBackground: {
    backgroundImage: `url(${public_url}/images/dialog_devices/pc.svg)`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "1000px 800px",
    height: "700px",
    padding: "px 120px 80px 120px"
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
    color: "#c3c3c3",
    width: "57%",
    opacity: ".40"
  },
  icons : {
    color: "#c3c3c3",
  },
  clickedicons : {
    color: "#0084ff",
  },
  icontext : {
    color: "#c3c3c3",
    marginLeft: "5px",
    fontSize: "20px"
  },
  clickedicontext: {
    color: "#0084ff",
    marginLeft: "5px",
    fontSize: "20px"
  },
  reply : {
    color: "#c3c3c3",
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
  placeholder : {
    height: "2px"
  }
});

export default styles;
