import React, { useRef, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import styles from "@/shared/Assets/style/uploadStyle.js"

import Alert from '@material-ui/lab/Alert';

import fake from "@/rooms/euphorigen/assets/videos/fake.webm";

import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';

import IconButton from '@material-ui/core/IconButton';

import { getWithExpiry } from "@/shared/UtilityFunctions";

const useStyles = makeStyles(styles);
const meta = require("@/rooms/euphorigen/json/metadata.json");

const PreUploadPage = ({props}) => {
  const location = useLocation();
  const isInPerson = location.pathname.includes("doctorvideo");
  const classes = useStyles();
  const level = getWithExpiry("level")
  const timer = useRef();
  let history = useHistory();

  const [nextDisabled, setnextDisabled] = useState(true)

  const timerLength = level >= 6 ? 0 : 30000

  timer.current = setTimeout(() => {
    setnextDisabled(false)
  }, timerLength)

  const handleNext = () => {
    let path = isInPerson ? '/videoshare' : '/puzzles'
    timer.current = setTimeout(() => {
        history.replace(path);
    }, 0);

  };

  const buttons = isInPerson ?
    <>
      <IconButton className={classes.iconbutton} disabled={false} onClick={() => {}}>
        <ReplyOutlinedIcon className={classes.reply}/>
        <span className={classes.icontext}>Like</span>
      </IconButton>
      {nextDisabled ?
      <IconButton className={classes.iconbutton} disabled={nextDisabled}>
        <ReplyOutlinedIcon className={classes.replydisabled}/>
        <span className={classes.icontextdisabled}>Share</span>
      </IconButton>
      :
      <IconButton className={classes.iconbutton} disabled={nextDisabled} onClick={handleNext}>
      <ReplyOutlinedIcon className={classes.reply}/>
      <span className={classes.icontext}>Share</span>
      </IconButton>
      }
    </> :
    <>
      {nextDisabled ?
        <IconButton className={classes.iconbutton} disabled={nextDisabled}>
          <ReplyOutlinedIcon className={classes.replydisabled}/>
          <span className={classes.icontextdisabled}>Next</span>
        </IconButton>
        :
        <IconButton className={classes.iconbutton} disabled={nextDisabled} onClick={handleNext}>
        <ReplyOutlinedIcon className={classes.reply}/>
        <span className={classes.icontext}>Next</span>
        </IconButton>
        }
    </>

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={0}
      className={classes.deviceContainer}
    >

            <Grid className={classes.deviceBackground}
              container
              direction="column"
              justifyContent="center"
              wrap="nowrap"
              alignItems="center">
              <Grid style={{width: "800px"}}>
                <Alert color="info" className={classes.alert}>{meta.script[5]}</Alert>
              </Grid>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={3}
                  style={{width: "800px"}}
                >
                  <Grid item xs={12} container
                  direction="column"
                  justifyContent="center"
                  alignItems="center">
                    <video width="70%" height="70%" controls>
                      <source src={fake} type="video/webm" />
                    </video>
                  </Grid>

                  <Grid
                  container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  >
                  <div className={classes.wrapper}>
                    <hr className={classes.lines}></hr>
                    <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    >
                      {buttons}
                    </Grid>
                    <hr className={classes.lines}></hr>
                  </div>
                </Grid>
                </Grid>
            </Grid>
        </Grid>
  );
};

export default PreUploadPage;