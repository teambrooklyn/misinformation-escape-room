import React from "react";

import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogActions from "@material-ui/core/DialogActions";

const meta = require("@/rooms/euphorigen/json/metadata.json");

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const CustomDialog = () => {
  const public_url = process.env.PUBLIC_URL;
  const dialog = meta.misc.dialog;
  const notification = meta.misc.notification;
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid
      item
      xs={12}
      sm={6}
      lg={3}
      style={{ zIndex: 9, position: "absolute", left: "58vw", top: "5vh" }}
    >
      <Slide direction="left" in={true} mountOnEnter unmountOnExit>
        <img
          src={public_url + notification}
          alt="notification"
          style={{ width: "100%", objectFit: "scale-down" }}
          onClick={handleClickOpen}
        ></img>
      </Slide>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <img
          src={public_url + dialog}
          alt="Dialog"
          style={{ width: "100%" }}
        ></img>

        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default CustomDialog;
