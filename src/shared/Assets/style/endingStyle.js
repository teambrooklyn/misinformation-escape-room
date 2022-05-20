
const PUBLIC_URL = process.env.PUBLIC_URL;

const styles = (theme) => ({
  container: {
    height: "100%",
    background: "rgba(0, 0, 0, 0.3)",
    backgroundImage: `url(${PUBLIC_URL}/images/room/main_hub.svg)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center"
  },
  messageFont: {
    fontFamily: "Helvetica Neue",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "30px",
  },
  messageContainer: {
    background: "#C4C4C4",
    borderRadius: "35px",
    width: "100%",
    padding: "30px"
  },
  endingText: {
    marginTop: "0px",
    lineHeight: "3rem",
    width: "100%",
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
