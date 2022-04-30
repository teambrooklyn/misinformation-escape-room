import React from "react";

import Typography from "@material-ui/core/Typography";
import { Grid, makeStyles, TextField } from "@material-ui/core";

import CustomForm from "@/shared/Components/CustomForm.js";
import Gallery from "@/shared/Components/Gallery.js";

import styles from "./style";
import { handleTextBoxChange } from "@/shared/UtilityFunctions"

// TODO: changed to props
const puzzle5 = require("../../../rooms/euphorigen/json/puzzle5.json");

const useStyles = makeStyles(styles);

const Puzzle5 = () => {
  const classes = useStyles();
  const { puzzleText, images, password } = puzzle5;
  const public_url = "";

  return (
    <Grid container alignItems="center" justifyContent="center" wrap="nowrap" className={classes.background}>
      <Grid className={classes.backgroundImg}>
        <Grid container justifyContent="center" alignItems="center" wrap="nowrap" className={classes.content}>
          <Grid className="messageNote">
             <img src={"/images/puzzle5/coach.png"} style={{height: "8em", position:"relative", left:"970px", top:"-148px", borderRadius:"15px"}}/>
          </Grid>

          <Grid container direction="column" justifyContent="center" alignItems="center" wrap="nowrap" className={classes.window}>
              <Grid className={classes.galleryContainer} style={{padding: "1em"}}>
                <img src={"/images/puzzle5/people.png"} style={{height: "43em"}}/>
              </Grid>

              <div className="instructionContainer">
                <Grid className={classes.postOne} style={{padding: "1em"}}>
                  <img src={"/images/puzzle5/whitebox.jpeg"} style={{height: "180px", width:"800px", borderRadius:"25px"}}/>
                </Grid>
                <Typography component="p" variant="body1" className={classes.postOneTextBox}>
                  {puzzleText.main}
                </Typography>
                <Typography component="p" variant="body1" className={classes.postTwoTextBox}>
                  {puzzleText.emojiGamePrompt}
                </Typography>
              </div>
      
              <Grid className={classes.imageContainer} >
                  <img
                    src={public_url + images.emoji_math.src}
                    alt={images.emoji_math.src}
                    className={classes.scaleimg}
                    style={{height:"450px", width:"350px"}}
                  />
                </Grid>

          </Grid>

          <Grid container
                direction="column" alignItems="center" justifyContent="center"
                style={{width: "300px"}}>

            <Grid className={classes.contentBg} style={{width: "395px", position:"relative", left:"-145px", top:"385px"}}>
              <CustomForm id={5} password={password} textFieldColor="#FFFFFF" buttonColor="#DF0024"/>
            </Grid>

            <Grid container justifyContent="center" alignItems="center" className={classes.contentBg} style={{width: "420px",height: "570px", position:"relative", top:"450px", left:"-145px"}}>
              <Typography
                component="div"
                variant="body1"
                style ={{marginBottom:"20px", textAlign:"center"}}>{puzzle5.puzzleText.emojiInputPrompt}
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

export default Puzzle5;