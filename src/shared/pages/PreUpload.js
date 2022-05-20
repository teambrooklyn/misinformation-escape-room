import React, { useRef, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import styles from "@/shared/Assets/style/uploadStyle.js"

import Alert from '@material-ui/lab/Alert';

import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';

import IconButton from '@material-ui/core/IconButton';

import { getWithExpiry } from "@/shared/UtilityFunctions";

const useStyles = makeStyles(styles);
const meta = require("@/rooms/euphorigen/json/metadata.json");

const PreUploadPage = (props) => {
  const location = useLocation();
  const isInPerson = location.pathname.includes("doctorvideo");
  const classes = useStyles();
  const level = getWithExpiry("level")
  const timer = useRef();
  let history = useHistory();

  const [nextDisabled, setNextDisabled] = useState(true)
  const [showPopUp, setShowPopUp] = useState(false)

  // CHANGE THIS TIMER LENGTH AFTER DEBUGGING
  const timerLength = level >= 6 ? 0 : 0 // 30000

  /*timer.current = setTimeout(() => {
    setNextDisabled(false)
  }, timerLength)*/

  const handleNext = () => {
    let path = isInPerson ? '/videoshare' : '/puzzles'
    timer.current = setTimeout(() => {
        history.replace(path);
    }, 0);
  };
  
  const handleVideoEnd = () => {
    setNextDisabled(false);
    if (props.fake) {
      setShowPopUp(true);
    }
  }

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
            <video width="70%" height="70%" controls onEnded={handleVideoEnd}>
              <source src={props.videoSrc} type="video/webm" />
            </video>

            { showPopUp && 
              <div className={classes.thoughtBubble}>
                <Typography
                    component="p"
                    variant="body1"
                    align="center"
                    className={classes.thoughtBubbleText}
                  >
                    Oh my gosh! None of this is true! But how does this look so real?<br/><br/>

                    Did I lose my memory... and acidently poison Justine’s drink without knowing? Did I get a concussion?<br/><br/>

                    There’s no way!<br/><br/>

                    I need to message Timothee to make sure he knows that
                    everything in this video is a lie! I don’t know why my
                    coach would say such things...
                </Typography>
              </div>
            }
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
  );
};

export default PreUploadPage;
