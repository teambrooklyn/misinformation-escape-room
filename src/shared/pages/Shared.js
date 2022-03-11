import React, { useEffect } from "react";
import { useHistory, withRouter, useLocation } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import styles from "@/shared/Assets/style/sharedStyle";

const useStyles = makeStyles(styles);

const Shared = () => {
  const location = useLocation();
  const classes = useStyles();
  const isInPerson = location.pathname.includes("videoshare")
  let history = useHistory();
  const sharedGif = isInPerson ?  "/images/shared/shared_mobile.gif" : "/images/shared/shared.gif";

  useEffect(() => {
    let path = isInPerson ? '/viralvideo' : '/puzzles'

    setTimeout(() => {
      history.replace(path);
    }, 5000);
  });

  return (
    <div className={classes.bg2Container}>
      <CssBaseline />
      <div className={classes.gifContainer}>
        <img
          className={classes.gif}
          src={process.env.PUBLIC_URL + sharedGif}
          alt=""
        ></img>
      </div>
    </div>
  );
};

export default withRouter(Shared);
