import { grey, blue } from "@material-ui/core/colors";
const styles = (theme) => ({
  table: {
    minWidth: 650,
  },
  gallery: {
    flexGrow: 1,
    marginTop: 10,
  },
  container: {
    display: "flex",
    position: "relative",
    justifyContent: "center",
  },
  text: {
    position: "absolute",
    top: "15vh",
    width: "75%",
  },
  scaleimg: {
    objectFit: "scale-down",
    width: "100%",
  },
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  folder: {
    fontSize: "4.75rem",
    color: blue[500],
    zIndex: 4,
  },
  accessibility: {
    fontSize: "4.75rem",
    color: grey[300],
    zIndex: 4,
  },
  puzzle5text: {
    fontFamily: 'Schoolbell',
    color: "red"
  },
  puzzle4ContainerBg: {
    backgroundColor: "rgba(112, 112, 112, 0.5)", 
    borderRadius: "14px", 
    backgroundBlendMode: "luminosity"}
});

export default styles;
