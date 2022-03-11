import React from "react";

import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const Window = (props) => {

  if(props.type === "upload") {
    return (
      <Grid style={{width: "800px", height: "30vh"}}>
      <Paper style={{
        padding: "2vh",
        maxWidth: '1000px',
        backgroundColor: "#282828"
        }} elevation={2}>
        <Grid container direction="row" justifyContent="center">
          {props.children}
        </Grid>
      </Paper>
    </Grid>
    )
  } else if (props.type === "in-person") {
    return (
      <Paper style={{
      padding: "2vh",
      maxWidth: '1000px',
      backgroundColor: "#282828"
      }} elevation={2}>
        <Grid container direction="row" justifyContent="center"
        alignItems="center" >
            {props.children}
        </Grid>
      </Paper>
    )
  } else {
    return (
      <Grid item xs>
        <Paper style={{
          padding: "2vh",
          minHeight: "20vh",
          backgroundColor: "#282828"}} elevation={2}>
          <Grid container direction="row" justifyContent="flex-start">
            {props.children}
          </Grid>
        </Paper>
      </Grid>
    );
  }
};

export default Window;
