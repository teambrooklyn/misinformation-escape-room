import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Typography } from "@material-ui/core";

import styles from "@/shared/Assets/style/endingStyle.js"

const PUBLIC_URL = process.env.PUBLIC_URL;

const meta = require("@/rooms/euphorigen/json/metadata.json");
const { ending } = meta

const useStyles = makeStyles(styles);

const Ending = (props) => {
  const classes = useStyles();
  const [endingPanel, setEndingPanel] = useState(0);

  localStorage.removeItem('password');
  localStorage.removeItem('level');
  localStorage.removeItem("preUploadVideoWatched");
  localStorage.removeItem("preCorrectVideoWatched");

  for(let i = 0; i<5; i++) {
    localStorage.removeItem(`p${i}start`);
  }

  /*setTimeout(()=>{
    window.location.href="/"
  }, 20000)*/

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className={classes.container}
      spacing={0}
    >
      <div style={{width: "70%"}}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          wrap="nowrap"
          className={classes.messageContainer}
        >

          <div className={classes.endingText}>
            <Typography variant="h2" className={classes.messageFont} style={{whiteSpace: 'pre-line'}}>
            {ending[endingPanel]}
            </Typography>
          </div>
        </Grid>
        <Grid container direction="row">
            { endingPanel > 0 &&
              <>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  onClick={() => setEndingPanel(endingPanel - 1)}
                  style={{marginTop: "10px", marginLeft: "0", marginRight: "auto"}}
                >
                  Previous
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  onClick={() => window.location.href="/"}
                  style={{marginTop: "10px",marginLeft: "auto", marginRight: "0"}}
                >
                  Exit
                </Button>
              </>
            }
            { endingPanel < 1 &&
              <Button
                variant="contained"
                size="small"
                color="primary"
                onClick={() => setEndingPanel(endingPanel + 1)}
                style={{marginTop: "10px",marginLeft: "auto", marginRight: "0"}}
              >
                Next
              </Button>
            }
          </Grid>
        </div>
    </Grid>
  );
};

export default Ending;
