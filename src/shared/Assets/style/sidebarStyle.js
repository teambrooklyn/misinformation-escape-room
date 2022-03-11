/*var mq = window.matchMedia( "(min-aspect-ratio: 14/8)" );
var finderHeight;
if (mq.matches) {
    finderHeight = "100%"
} else {
  finderHeight = "100%"
}
*/

const styles = (theme) => ({
  paper: {
    padding: theme.spacing(2),
    height: "100%",
    boxSizing: "border-box",
    opacity: 0.8,
    backgroundColor: "#2E3034",
  },
  sidebar: {
    display: "flex",
    flexDirection: "column",
    padding: "10 10",
    color: "#FFFFFF",
  },
  sidebarEntry: {
    display: "flex",
    alignItems: "center",
    justfiyContent: "space-around",
    margin: "0.2rem",
  },
  sidebarText: {
      marginLeft: "1.1vh",
      fontSize: "1.6vh"
  },
  sidebarTitle: {
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  icon : {
    height: "2.6vh",
    width: "2.6vh"
  }
  
});

export default styles;
