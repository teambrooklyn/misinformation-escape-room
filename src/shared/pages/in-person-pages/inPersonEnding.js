import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

import styles from "@/shared/Assets/style/endingStyle";

const useStyles = makeStyles(styles);
const PUBLIC_URL = process.env.PUBLIC_URL;

const InPersonEnding = (props) => {
  const classes = useStyles();

  setTimeout(()=>{
    window.location.href="/"
  },20000)

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className={classes.inPersonContainer}
    >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          className={classes.inPersonMessageContainer}
        >
          <div className="image-container">
            <img src={PUBLIC_URL + "/images/ending/star.gif"} alt="star icon"
              className={classes.inPersonStar}
            />
          </div>

            <div className={classes.inPersonEndingText}>
              <Typography variant="h1" className={classes.headerFont}>Congratulations!</Typography>
              <Typography variant="h2" className={classes.messageFont}>
                You have solved
              </Typography>
              <Grid container justifyContent="center" alignItems="center">
                <img
                  src={`${PUBLIC_URL}/images/euphorigen_banner.jpg`}
                  alt="Euphorigen Logo"
                  style={{ height: "80px", width: "auto" }}
                />
             </Grid>
              <Typography variant="h3" className={classes.messageFont} style={{marginTop: "1em"}}>
                Turn in the final pass phrase <strong>SAFE AND EFFECTIVE</strong> to your lead investigator to complete the investigation!
              </Typography>
            </div>
        </Grid>
    </Grid>
  );
};

export default InPersonEnding;
