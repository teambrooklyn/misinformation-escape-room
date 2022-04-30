// TODO: change to props
const puzzle5 = require("../../../rooms/euphorigen/json/puzzle5.json");

const styles = () => ({
  // background: {
  //   backgroundColor: "#E5E5E5",
  //   height: "140vh !important"
  // },
  
  backgroundImg: {
    width: "78em",
    height:"105em",
    padding: " 2em 8em 8em 4em",
    background: `url(${puzzle5.background})`,
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    // backgroundSize: "cover"
  },
  content: {
    margin: "-2em -2em 0 0"
  },
  messageNote: {
    background: `url(${puzzle5.panel})`,
    width: "304px",
    height: "234px",
    position:"relative",
    top:"400px",
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
    backgroundPosition: "right top",
    width: "690px",
    height: "729px",
    position: "relative"
  },
  galleryContainer: {
    position: "relative",
    top: "610px",
    left: "-470px",
    height:"300px",
    width:"350px"
  },
  postOneTextBox: {
    position: "relative",
    top:"-110px",
    left:"-180px",
    background:"white",
    fontFamily: "Helvetica Neue",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "15px",
    lineHeight: "25px",
    color:"#0085C7",
    height:"70px",
    width:"700px"
  },

  postTwoTextBox: {
    position: "relative",
    background:"white",
    top:"-110px",
    left:"-180px",
    fontFamily: "Helvetica Neue",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "15px",
    lineHeight: "25px",
    color:"#0085C7",
    height:"70px",
    width:"700px"
  },

  postOne:{
    position:"relative",
    left:"-250px",
    top:"60px"
  },
  imageContainer:{
    position:"relative",
    top:"680px",
    left:"-250px",
    paddingBottom:"100px"
  },
  textField: {
    width:"100px",
    height: "2px",
    marginTop:"-13px"
  },
  contentBg: {
    backgroundColor: "rgba(112, 112, 112, 0.5)",
    borderRadius: "14px",
    backgroundBlendMode: "luminosity",
    padding: "1em 1em 1em 1em",
    color:"white",
    display: "flex",
    flexDirection: "column",
    marginBottom:"2px"
  },
  });

  export default styles;