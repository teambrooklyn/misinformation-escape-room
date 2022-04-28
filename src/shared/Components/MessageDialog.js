
import React from "react";
import { useLocation } from 'react-router-dom'
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import style from "@/shared/Assets/style/dialogStyle";
import ImageMapper from 'react-image-mapper';
import { Grid } from "@material-ui/core";
import { getWithExpiry } from "@/shared/UtilityFunctions";


const useStyles = makeStyles(style)

const MessageDialog = ({textContent, openDialog, setOpenDialog, isSecondDialog}) => {

    const location = useLocation()

    const level = parseInt(getWithExpiry("level"))
    const meta = require("@/rooms/euphorigen/json/metadata.json");
    const public_url = process.env.PUBLIC_URL;
    const dialog = meta.misc.dialog;
    const classes = useStyles()
    const sH = window.innerHeight

    const MAP = {
      name: "my-map",
      areas: [
        { name: "1", shape: "circle", coords: [sH*.031, sH*.039, sH*.008 ] },
        { name: "2", shape: "circle", coords: [sH*.056, sH*.039, sH*.008 ] },
      ]
    }

    let content;

    if (level === 6 && !location.pathname.includes("upload")) {
      content =
      <Grid container direction="column" alignItems="center" justifyContent="flex-start">
        <ImageMapper src={public_url + dialog} map={MAP} height={.6*sH} active={false}/>
        <button className={classes.nextButton} onClick={setOpenDialog}>Next</button>
      </Grid>
    } else {
      content = (
      <Grid container direction="column" alignItems="center" justifyContent="flex-start">
        <Grid className={classes.backgroundContainer} style={{ backgroundImage: `url(/images/message/dialog_devices/iphone${level}${isSecondDialog ? ".5" : ""}.png)` }}>
          <p className={classes.textbox}>{textContent}</p>
        </Grid>
      </Grid>
      )
    }

    return (
      <Dialog
          aria-labelledby="customized-dialog-title"
          open={openDialog}
          onClose={() => setOpenDialog(false)}
          PaperProps={{
          style: {
              backgroundColor: 'transparent',
              boxShadow: 'none',
          },
          }}
      >
          {content}
      </Dialog>
  )
}

export default MessageDialog;
