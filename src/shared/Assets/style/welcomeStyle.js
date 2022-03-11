const styles = (theme) => ({
  root: {
    flexGrow: 1,
    height: "100%",
  },
  main: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    minHeight: "45vh",
  },
  paper: {
    padding: theme.spacing(2),
    minHeight: 800,
  },
  paper2: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    display: "flex",
    height: "105px",
    maxWidth: "100%",
    alignItems: "center",
  },
  logoContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "space-around",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  title: {
    fontFamily: "Special Elite",
  },
  paragraph: {
    marginBottom: "2rem",
    color: "#3455C8",
    backgroundColor: "#FFFFFF",
    borderRadius: "15px",
    padding: "15px"
  },
  banner: {
    marginBottom: "10px"
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  button: {
    marginBottom: "30px"
  },
  form: {
    marginTop: "-15px"
  },
});

export default styles;
