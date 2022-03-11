import React, { useState, useEffect } from "react";

import '@/shared/pages/hub.css'
import { Grid } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import styles from "@/shared/pages/in-person-pages/styles/hubStyle";

import ImageMapper from 'react-image-mapper';

const meta = require("@/rooms/euphorigen/json/metadata.json");

const useStyles = makeStyles(styles);

const InPersonHub = () => {

  const classes = useStyles();

  // We only want the content from level 5 in the in-perosn Escape room game.
  const level = 5

  const [openMessageDialog, setOpenMessageDialog] = useState(false);
  const [openContentDialog, setOpenContentDialog] = useState(false);

  const public_url = process.env.PUBLIC_URL;
  const dialog = meta.misc.dialog_in_person;

  useEffect(() => {
    var timer = setTimeout(()=>{
      setOpenMessageDialog(true)
      clearTimeout(timer)

    }, 500)
  },[level])

  const handleClose = () => {
    setOpenMessageDialog(false);
    setOpenContentDialog(true);
  };

  const sH = window.innerHeight

  const MAP = {
    name: "my-map",
    areas: [
      { name: "1", shape: "circle", coords: [sH*.031, sH*.039, sH*.008 ] },
      { name: "2", shape: "circle", coords: [sH*.056, sH*.039, sH*.008 ] },
    ]
  }

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh", backgroundColor: "#C1DFF0"}}
    >
      <Dialog
        open={openMessageDialog}
        PaperProps={{
          style: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
          },
        }}
      >
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            wrap="nowrap"
            className={classes.message}>
            <strong>MESSAGES</strong>

            <p>You have a new message!</p>

            <p className={classes.openButton} onClick={handleClose}>Open</p>
          </Grid>

      </Dialog>

      <Dialog
        open={openContentDialog}
        PaperProps={{
          style: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
          },
        }}
      >
          <ImageMapper src={public_url + dialog} map={MAP} height={.8*sH} active={false}
        />
      </Dialog>
    </Grid>
  );
};

export default InPersonHub;
