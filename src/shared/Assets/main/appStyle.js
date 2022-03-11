import React from "react";
import { createTheme, withStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
const sancreek = "'Sancreek', cursive";
const mate_sc = "'Mate SC', serif";
const source_sans_pro = "'Source Sans Pro', sans-serif";
export const styles = (theme) => ({
  app: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  appBg: {
    height: "100%",
    width: "100%",
    position: "fixed",
    left: 0,
    top: 0,
    zIndex: -1,
  },

  textBody: {
    fontFamily: source_sans_pro,
  },
  vTabsContainer: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    height: "35vh",
    width: "11vw",
    float: "left",
    position: "fixed",
    left: ".1vw",
  },

  tabPanel: {
    height: "100%",
    width: "75%",
  },
  tabPanelContainer: {
    display: "flex",
    flexDirection: "column",
    //height: "100vh",
    width: "100%",
    justifyContent: "space-around",
    paddingLeft: theme.spacing(4),
  },
  tabLabel: {
    fontSize: "1.6vw"
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  form: {
    margin: theme.spacing(1),
  },
  input: {
    fontSize: "2rem",
  },
  margin: {
    margin: theme.spacing(1),
  },
  h1: {
    fontFamily: sancreek,
    color: "white",
    fontSize: "8rem",
    textAlign: "center",
  },
  h2: {
    fontFamily: sancreek,
    color: "white",
    fontSize: "4rem",
    textAlign: "center",
  },
  subtitle1: {
    fontFamily: mate_sc,
    color: "black",
    fontSize: "1.5rem",
  },
  subtitle2: {
    fontFamily: mate_sc,
    color: "black",
    fontSize: "1rem",
  },
  body1: {
    fontFamily: source_sans_pro,
    marginTop: theme.spacing(2),
  },
  logo: {
   // verticalAlign: "middle",
  //  display: "table-cell",
   // height: "105px",
     padding: "5px",
   // width: "100%",
   // overflow: "auto"
  },
  logoContainer: {
    marginLeft: "9vw"
  },
  adminLink: {
    position: "absolute",
    right: "8px",
    bottom: "5px"
  }
});

export const theme = createTheme();

export const MyTab = withStyles((theme) => ({
  root: {
    fontSize: "1.8rem",
    fontFamily: mate_sc,
    "&:hover": {
      color: "#40a9ff",
      opacity: 1,
    },
    "&$selected": {
      color: "#fafafa",
      fontSize: "2rem",
    },
    "&:focus": {
      color: "#fafafa",
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);
