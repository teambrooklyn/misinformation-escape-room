
const PUBLIC_URL = process.env.PUBLIC_URL;

const styles = (theme) => ({
  container: {
    height: "100%",
    backgroundImage: `url(${PUBLIC_URL}/images/ending/animated_bg.gif)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center"
  },
  headerFont: {
    fontFamily: "Helvetica Neue",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "30px",
    marginBottom: "35px"
  },
  messageFont: {
    fontFamily: "Helvetica Neue",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "20px",
    marginBottom: "35px"
  },
  messageContainer: {
    background: "#FFF9E3",
    borderRadius: "35px",
    width: "30vw",
    minWidth: "500px",
    height: "50vh",
    minHeight: "550px",
  },
  star: {
    height: "200px",
    width: "200px"
  },
  endingText: {
    marginTop: "0px",
    lineHeight: "3rem",
    width: "240px",
    color: "black",
    textAlign: "center",
  },
  inPersonContainer: {
    background: "#E3CFBC"
  },
  inPersonMessageContainer: {
    background: "#FFF9E3",
    borderRadius: "35px",
    width: "90vw",
    maxWidth: "466px",
    height: "85vh",
    minHeight: "600px"
  },
  inPersonEndingText: {
    width: "240px",
    color: "black",
    textAlign: "center",
  },
  inPersonStar: {
    height: "150px",
    width: "150px"
  }
});

export default styles;
