const meta = require("@/rooms/euphorigen/json/metadata.json");
const font =  "'Sancreek', cursive";
const styles = (theme) => ({
  landing: {
    backgroundImage: `url(${process.env.PUBLIC_URL + meta.misc.landing})`,      backgroundSize: "100% 100%",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
  },
  text: {
    fontFamily: font,
    color: "white",
    fontSize: "8rem"
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    objectFit: "cover",
    width: "100%",
  },
  mainText: {
    color: "white",
  },
  main: {
    flexGrow: 0.8,
  },
  textContainer: {
    height: "20%",
  }
});

export default styles;
