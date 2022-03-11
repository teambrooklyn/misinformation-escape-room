import React, { useRef, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";

import styles from "@/shared/Assets/style/uploadStyle.js";
import Dialog from "@material-ui/core/Dialog";
import Alert from '@material-ui/lab/Alert';

import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';

import IconButton from '@material-ui/core/IconButton';

import { getWithExpiry } from "@/shared/UtilityFunctions";

const useStyles = makeStyles(styles);

const UploadPage = (props) => {
  const location = useLocation();
  const classes = useStyles();
  const [sharing, setSharing] = useState(false);
  const level = getWithExpiry("level")
  const timer = useRef();
  const meta = require("@/rooms/euphorigen/json/metadata.json");
  let history = useHistory();

  const [likeClicked, setLikeClicked] = useState(false)

  const handleShare = () => {
    setSharing(true);
    let path;

    if (location.pathname.includes("newvideo")) {
      path = `/ending_`
    } else if (level >= 6) {
      path = `/ending`
    } else if (level === 5) {
      path = `/shared`
    }

    timer.current = setTimeout(() => {
      history.replace(path);
    }, 2000);
  };

  const buttonSection = () => {
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
      spacing={0}
      className={classes.deviceContainer}
    >
      <Grid item xs={12} sm={8} style={{ minWidth: "40vw", maxWidth: "50%", flexBasis: "55%", marginTop: "-10vh" }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={0}
        >
          <Dialog
            aria-labelledby="customized-dialog-title"
            open={true}
            maxWidth={"lg"}
            scroll="body"
            PaperProps={{
              style: {
                backgroundColor: 'transparent',
                boxShadow: 'none',
                width: "80vw"
              },
                }}
          >
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={0}
              className={classes.deviceBackground}>
              <Alert color="info">{meta.script[level + 1]}</Alert>
              <Grid style={{width: "100%", maxWidth: "700px"}} container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  wrap="nowrap">
                {props.children}
                {buttonSection()}
              </Grid>
            </Grid>
          </Dialog>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UploadPage;
