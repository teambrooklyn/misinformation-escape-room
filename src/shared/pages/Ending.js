import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

import styles from "@/shared/Assets/style/endingStyle.js"

const PUBLIC_URL = process.env.PUBLIC_URL;

const useStyles = makeStyles(styles);

const Ending = (props) => {
  const classes = useStyles();
  localStorage.removeItem('password');
  localStorage.removeItem('level');
  localStorage.removeItem("preUploadVideoWatched");
  localStorage.removeItem("preCorrectVideoWatched");

  for(let i = 0; i<5; i++) {
    localStorage.removeItem(`p${i}start`);
  }

  setTimeout(()=>{
    window.location.href="/"
  }, 20000)

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className={classes.container}
      spacing={0}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={classes.messageContainer}
      >

        <img
          src={`${PUBLIC_URL}/images/ending/star.gif`}
          alt="star"
          className={classes.star}
        />

        <div className={classes.endingText}>
          <Typography variant="h1" className={classes.headerFont}>Congratulations!</Typography>
          <Typography variant="h2" className={classes.messageFont}>
            You have solved
          </Typography>

            <Grid container justifyContent="center" alignItems="center">
              <img
                src={`${PUBLIC_URL}/images/laannbanner.png`}
                alt="La'Ann 2050 Logo"
                style={{ height: "130px", width: "auto" }}
              />
            </Grid>
        </div>
      </Grid>
    </Grid>
  );
};

export default Ending;
