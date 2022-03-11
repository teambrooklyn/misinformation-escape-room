const sharedBg = "/images/shared/sharedBg.jpg";
const styles = (theme) => ({
    bg2Container: {
      display: "flex",
      backgroundImage: `url(${process.env.PUBLIC_URL + sharedBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
    },
    gifContainer: {
      textAlign: "center",
      width: "100%",
      height: "100%",
    },
    gif: {
      maxWidth: "100%",
      maxHeight: "100%",
    }
  });

export default styles;