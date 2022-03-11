import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";

import styles from "@/shared/Assets/style/uploadStyle.js";
import inPersonUploadRealStyles from "@/shared/pages/in-person-pages/styles/uploadRealStyle";
import Alert from '@material-ui/lab/Alert';
import Window from "@/shared/Hubs/computerHub/Window";

import real from "@/rooms/euphorigen/assets/videos/real.webm";

import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';

import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(styles);

const useInPersonUploadRealStyles = makeStyles(inPersonUploadRealStyles);

const InPersonUploadReal = () => {

  const classes = useStyles();
  const inPersonClasses = useInPersonUploadRealStyles();

  const [sharing, setSharing] = useState(false);
  const timer = useRef();
  const meta = require("@/rooms/euphorigen/json/metadata.json");
  let history = useHistory();

  const [likeClicked, setLikeClicked] = useState(false)

  const handleShare = () => {
    setSharing(true);
    let path = `/ending_`

    timer.current = setTimeout(() => {
      history.replace(path);
    }, 2000);
  };

  const buttons = () => {
    return (
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
              <IconButton className={classes.iconbutton} onClick={() => setLikeClicked(!likeClicked)}>
              {likeClicked ?
              <ThumbUpIcon className={classes.clickedicons}/>
              :
              <ThumbUpAltOutlinedIcon className={classes.icons}/>}
          {likeClicked ?
          <span className={classes.clickedicontext}>Like</span> :
          <span className={classes.icontext}>Like</span>}
              </IconButton>

              <IconButton className={classes.iconbutton} onClick={handleShare}>
              <ReplyOutlinedIcon className={classes.reply}/>
              <span className={classes.icontext}>Share</span>
              </IconButton>

          </Grid>
          <hr className={classes.lines}></hr>
          { sharing ?
          <LinearProgress
              className={classes.linearProgress}
              /> : <div className={classes.placeholder}></div>}
          </div>
      </Grid>
    )
  }

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      wrap="nowrap"
      className={inPersonClasses.container}
    >
      <Alert color="info" className={inPersonClasses.alert}>{meta.script[7]}</Alert>
      <Window type="in-person">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={0}
        >
          <Grid>
            <video width="100%" height="100%" controls>
                <source src={real} type="video/webm" />
            </video>
          </Grid>
        </Grid>
        {buttons()}
      </Window>
    </Grid>
  );
};

export default InPersonUploadReal;
