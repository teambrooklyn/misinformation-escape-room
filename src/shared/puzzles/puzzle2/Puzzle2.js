import React, {useState} from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Grid, TextField } from "@material-ui/core";

import { handleTextBoxChange } from "@/shared/UtilityFunctions"
import CustomForm from "@/shared/Components/CustomForm.js";
import CustomImgLightbox from "@/shared/Components/CustomImgLightbox.js";
import styles from "./style";
import Lightbox from "react-image-lightbox";

const binary_chart = "/images/puzzle2/binary_chart.png";
// TODO: change to props
const puzzle2 = require("../../../rooms/euphorigen/json/puzzle2.json");

const useStyles = makeStyles(styles);

const Puzzle2 = (props) => {
  const classes = useStyles();

  const { puzzleText, images, password } = puzzle2;
  const public_url = process.env.PUBLIC_URL;

  const [isOpen, setIsOpen] = useState(false)

  const data = ['Twitter', 'Reddit', 'Instagram', 'Facebook']
  return (
    <Grid container justifyContent="center" alignItems="center" className={classes.backgroundContainer}>
      <Grid container direction="column" justifyContent="center" alignItems="center" wrap="nowrap" style={{width: "1500px"}}>
        <Grid container direction="row" justifyContent="center" alignItems="center" wrap="nowrap">
          <Grid container justifyContent="center" alignItems="center" direction="column" wrap="nowrap" className={classes.promptContainer}>

            <Typography component="div" variant="body1" className={classes.textContainer} style={{padding: "30px", fontSize: "20px"}}>
              <div style={{textAlign: "left"}}>{puzzleText.title} </div>
              <div style={{marginTop: "35px"}}>
                {puzzleText.bullets.map((bullet, key) => {
                  return (
                    <li key={key}>{bullet}</li>
                  )
                })}
              </div>
              <div style={{textAlign: "left", marginTop: "35px"}}>{puzzleText.main[0]} </div>
            </Typography>

            <Grid>
              <Grid container direction="row" alignItems="center">
                {images.sub.map(({ src }, key) => (
                  <div key={key} style={{marginLeft: "60px", marginRight: "60px", marginTop: "30px"}}>
                    <Grid container direction="row" alignItems="center">
                      <div>
                        <CustomImgLightbox img={public_url + "/images/puzzle2/folder.png"} alt={data[key] + "folder"} width="135px" height="110px" src={public_url + src} padding={50}/>
                        <Typography
                          component="p"
                          variant="body1"
                          style ={{color:"#009F3D", fontSize: "25px", fontWeight: "bold", textAlign: "center"}}>
                            {data[key]}
                        </Typography>
                      </div>
                      <TextField
                        variant="outlined"
                        label="Enter letter"
                        size="medium"
                        className={classes.textField}
                        onBlur={event => {
                          handleTextBoxChange(event, key)
                        }}
                      />
                    </Grid>
                  </div>
                ))}
              </Grid>
            </Grid>
          </Grid>

          <Grid container justifyContent="center" alignItems="center" direction="column" className={classes.passwordFormContainer}>
            <div className={classes.messageContainer}>
              <Grid container direction="row">
                <div style={{width: "50px"}}>
                  <img className={classes.pfp} src={"/images/puzzle2/coach_pfp.png"} alt="coach profile pic"/>
                </div>
                <div style={{width: "450px", marginTop: "10px"}}>
                  <img className={classes.logo} src={"/images/message/imessagelogo.png"} alt="iMessage logo"/>
                  <div className={classes.messageText}>Coach</div>
                  <div className={classes.bodyText} >{puzzleText.message}</div>
                </div>
              </Grid>
            </div>

            <div style={{height: "165px"}}/>
            
            <button className={classes.formButton} onClick={() => setIsOpen(true)}>
              Tap to see code
            </button>

            {isOpen && (
              <Lightbox
                mainSrc={public_url + binary_chart}
                onCloseRequest={() => setIsOpen(false)}
              />
            )}

            <Grid container justifyContent="center" alignItems="center" direction="column" className={classes.textContainer} style={{width: "500px", height: "300px", backgroundColor: "#0085C7"}}>
              <CustomForm id={2} password={password} textFieldColor="#FFFFFF" buttonColor="#E1EAF2"/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Puzzle2;
