import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import styles from "@/shared/Assets/style/uploadStyle.js"
import inPersonStyles from "@/shared/pages/in-person-pages/styles/uploadFakeStyle.js"
import Alert from '@material-ui/lab/Alert';
import Window from "@/shared/Hubs/computerHub/Window"

import fake from "@/rooms/euphorigen/assets/videos/fake.webm";

import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';

import IconButton from '@material-ui/core/IconButton';

import { getWithExpiry } from "@/shared/UtilityFunctions";

const useStyles = makeStyles(styles);
const useInpersonStyles = makeStyles(inPersonStyles);
const meta = require("@/rooms/euphorigen/json/metadata.json");

const InPersonFakeUpload = (props) => {
  const classes = useStyles();
  const inPersonStyle = useInpersonStyles();
  const level = getWithExpiry("level")
  const timer = useRef();
  let history = useHistory();

  const [nextDisabled, setnextDisabled] = useState(true)

  const timerLength = level >= 6 ? 0 : 0

  timer.current = setTimeout(() => {
    setnextDisabled(false)
  }, timerLength)

  const handleNext = () => {
    let path = '/videoshare'
    timer.current = setTimeout(() => {
        history.replace(path);
    }, 0);
  };

  const buttons = <>
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
    </>

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      wrap="nowrap"
      className={inPersonStyle.container}
    >
      <Alert className={inPersonStyle.alert} color="info">{meta.script[5]}</Alert>
      <Window type="in-person">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={12}>
            <video width="100%" height="100%" controls>
              <source src={fake} type="video/webm" />
            </video>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <div className={classes.wrapper}>
            <hr className={classes.lines}/>
            <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            >
              {buttons}
            </Grid>
            <hr className={classes.lines}/>
          </div>
        </Grid>
      </Window>
    </Grid>
  );
};

export default InPersonFakeUpload;
