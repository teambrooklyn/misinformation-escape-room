import React from "react";

import Typography from "@material-ui/core/Typography";
import { Grid, makeStyles, TextField } from "@material-ui/core";

import CustomForm from "@/shared/Components/CustomForm.js";
import Gallery from "@/shared/Components/Gallery.js";

import styles from "./style";
import { handleTextBoxChange } from "@/shared/UtilityFunctions"

// TODO: changed to props
const puzzle4 = require("../../../rooms/euphorigen/json/puzzle4.json");

const useStyles = makeStyles(styles);

const Puzzle4 = () => {
  const classes = useStyles();
  const { puzzleText, images, password } = puzzle4;
  const public_url = "";

  return (
    <Grid container alignItems="center" justifyContent="center" wrap="nowrap" className={classes.background}>
      <Grid className={classes.backgroundImg}>

        <Grid container justifyContent="center" alignItems="center" wrap="nowrap" className={classes.content}>

          <Grid item container justifyContent="center" alignItems="center" className={classes.messageNote}>
            <span style={{padding: "1em"}}>
              {puzzle4.puzzleText.message}
            </span>
          </Grid>

          <Grid container direction="column" justifyContent="center" alignItems="center" wrap="nowrap" className={classes.window}>
              <Grid className={classes.galleryContainer}>
                <Gallery images={images.sub.map(({ src }) => public_url + src)} />
              </Grid>


              <Grid container direction="column" justifyContent="center" alignItems="center" className={classes.postOne}>
                <Typography component="p" variant="body1" className={classes.postOneTextBox}>
                  {puzzleText.main}
                </Typography>
              </Grid>

              <div className={classes.postTwo}>
                <Grid style={{position: "relative"}}>
                  <Typography component="p" variant="body1" className={classes.postTwoTextBox}>
                    {puzzleText.emojiGamePrompt}
                  </Typography>
                </Grid>
                <Grid className={classes.imageContainer}>
                  <img
                    src={public_url + images.emoji_math.src}
                    alt={images.emoji_math.src}
                    className={classes.scaleimg}
                  />
                </Grid>
              </div>

          </Grid>

          <Grid container
                direction="column" alignItems="center" justifyContent="center"
                style={{width: "300px"}}>

            <Grid className={classes.contentBg} style={{width: "250px"}}>
              <CustomForm id={4} password={password} />
            </Grid>

            <Grid container justifyContent="center" alignItems="center" className={classes.contentBg} style={{width: "280px",height: "530px", marginTop: "20px"}}>
              <Typography
                component="div"
                variant="body1"
                style ={{marginTop:"3px", textAlign:"center"}}>{puzzle4.puzzleText.emojiInputPrompt}
              </Typography>

              {images.inputBoxes.map(({ src, alt }, key) => (
                <Grid container justifyContent="center" alignItems="center" spacing={0} direction="row" key={key} style={{width: "170px"}}>
                  <Grid item xs>
                    <img
                    key={key}
                    src={public_url + src}
                    alt={alt}
                    className={classes.scaleimg}
                    style={{width:"30px"}}
                  ></img>
                  </Grid>
                  <Grid item xs>
                    <Typography
                    component="div"
                    variant="h4"
                    style ={{marginTop:"3px"}}>=
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <TextField
                      variant="outlined"
                      label=""
                      size="small"
                      inputProps={{ maxLength: 10 }}
                      className={classes.textField}
                      onBlur={function(event) {
                        handleTextBoxChange(event, key)
                      }}
                    />
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </Grid>
  );
};

export default Puzzle4;