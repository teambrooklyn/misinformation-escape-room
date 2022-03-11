import React, {useState} from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Grid, TextField } from "@material-ui/core";

import CustomForm from "@/shared/Components/CustomForm.js";
import CustomLightbox from "@/shared/Components/CustomLightbox.js";
import styles from "./style";
import { handleTextBoxChange } from "@/shared/UtilityFunctions"
import Lightbox from "react-image-lightbox";

const binary_chart = "/images/puzzle2/03binary_chart.png";
// TODO: change to props
const puzzle2 = require("../../../rooms/euphorigen/json/puzzle2.json");

const useStyles = makeStyles(styles);

const Puzzle2 = (props) => {
  const classes = useStyles();

  const { puzzleText, images, password } = puzzle2;
  const public_url = process.env.PUBLIC_URL;

  const [isOpen, setIsOpen] = useState(false)

  return (
    <Grid container justifyContent="center" alignItems="center" className={classes.backgroundContainer}>
      <Grid className={classes.backgroundImgContainer}>

        <Grid container direction="column" justifyContent="center" alignItems="center" wrap="nowrap" style={{width: "1200px", padding: "0 3em 0 3em"}}>
          <Grid container direction="row" justifyContent="space-evenly" alignItems="center" wrap="nowrap" className={classes.timeAndMessageContainer}>
            <div className={classes.timeContainer}>
              <p style={{font: "Helvetica Neue", fontWeight: "400", fontSize: "40px"}}>{puzzle2.puzzleText.time}</p>
              <p style={{marginTop: "-30px"}}>{puzzle2.puzzleText.date}</p>
            </div>

            <div className={classes.messageContainer}>
              <img className={classes.logo} src={"/images/message/imessagelogo.png"} alt="imessagelogo"></img>
              <div className={classes.messageText}>Coach</div>
              <div className={classes.fromText} >{}</div>
              <div className={classes.bodyText} >{puzzleText.message}</div>
            </div>
          </Grid>

          <Grid container direction="row" justifyContent="center" alignItems="center" wrap="nowrap">

            <Grid container justifyContent="center" alignItems="center" direction="column" className={classes.passwordFormContainer}>

              <Grid container justifyContent="center" alignItems="center" direction="column" className={classes.textContainer} style={{width: "250px", height: "300px"}}>
                <CustomForm id={3} password={password}/>
              </Grid>

              <button className={classes.formButton} onClick={() => setIsOpen(true)}>
                Tap to see code
              </button>

              {isOpen && (
                <Lightbox
                  mainSrc={public_url + binary_chart}
                  onCloseRequest={() => setIsOpen(false)}
                />
              )}
            </Grid>

            <Grid container justifyContent="center" alignItems="center" direction="column" wrap="nowrap" className={classes.promptContainer}>

              <Typography component="div" variant="body1" className={classes.textContainer}>
                <div style={{textAlign: "center"}}>{puzzleText.title} </div>
                <div style={{marginTop: "20px"}}>
                  {puzzleText.bullets.map((bullet, key) => {
                    return (
                      <li key={key}>{bullet}</li>
                    )
                  })}
                </div>
                <div style={{textAlign: "center", marginTop: "20px"}}>{puzzleText.main[0]} </div>

              </Typography>


              <Grid>
                <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center" style={{marginTop:"-25px"}}>
                  {images.sub.map(({ src }, key) => (
                    <div key={key} style={{marginLeft:"10px",marginRight:"10px"}}>
                      <div style={{marginLeft:"20px"}}>
                        <Typography
                          component="div"
                          variant="body1"
                          style ={{paddingLeft:"2px"}}>Letter {key + 1}
                        </Typography>
                        <TextField
                          variant="outlined"
                          label=""
                          size="medium"
                          inputProps={{ maxLength: 1 }}
                          className={classes.textField}
                          onBlur={event => {
                            handleTextBoxChange(event, key)
                          }}
                        />
                      </div>
                      <CustomLightbox part={key} src={public_url + src} />
                    </div>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Puzzle2;
