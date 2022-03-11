import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import real from "@/rooms/euphorigen/assets/videos/real.webm";
import fakeVideoPreview from "@/rooms/euphorigen/assets/videos/fake-preview.png"
import Upload from "@/shared/pages/Upload.js";
import PreUpload from "@/shared/pages/PreUpload.js";
import styles from "@/shared/Assets/style/uploadStyle.js";
const useStyles = makeStyles(styles);

const solutionImage = `${process.env.PUBLIC_URL}/images/puzzle4/3.jpg`;

export const PreUploadFake = (props) => {

  return (
    <PreUpload/>
  );
};

export const UploadFake = () => {
  const classes = useStyles();

  return (
    <Upload>
      <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      >
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={4}>
          <img
            src={solutionImage}
            alt="Solution"
            className={classes.images}
          ></img>
        </Grid>
        <Grid item xs={8} container>
          <img className={classes.images} src={fakeVideoPreview} alt="preview of the fake video"/>
        </Grid>
      </Grid>
    </Upload>
  );
};

export const UploadReal = () => {

  return (
    <Upload>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
        <Grid item xs={8}>
          <video width="100%" height="100%" controls>
            <source src={real} type="video/webm" />
          </video>
        </Grid>
      </Grid>
    </Upload>
  );
};
