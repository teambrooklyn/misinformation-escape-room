import React, {useState} from "react";

import Typography from "@material-ui/core/Typography";
import { Grid, Dialog, Icon, IconButton, makeStyles } from "@material-ui/core";

import CustomForm from "@/shared/Components/CustomForm.js";
import Lightbox from "react-image-lightbox";
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';

import styles from "./style";
import "react-image-lightbox/style.css";
import 'react-h5-audio-player/lib/styles.css';

// TODO: changed to props
const puzzle3 = require("../../../rooms/euphorigen/json/puzzle3.json");

const useStyles = makeStyles(styles);

const Puzzle3 = () => {
  const classes = useStyles();
  const { puzzleText, calls, password } = puzzle3;
  const [currentVoicemail, setCurrentVoicemail] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const code_chart = "/images/puzzle3/code_chart.png";
  const info_icon = "/images/puzzle3/info.png";
  const public_url = "";

  return (
    <Grid container alignItems="center" justifyContent="center" wrap="nowrap" className={classes.background}>
      <Grid className={classes.backgroundImg}>
        <Grid container justifyContent="center" alignItems="center" wrap="nowrap" className={classes.content}>
          <Grid container direction="column" justifyContent="center" alignItems="center" wrap="nowrap" className={classes.window}>
            <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start" wrap="nowrap" className={classes.instructions}>
              <Typography component="div" variant="body1" className={classes.textContainer}>
                <div>{puzzleText.main[0]} </div>
                <div style={{marginTop: "1em"}}>
                  {puzzleText.bullets.map((bullet, key) => {
                    return (
                      <li key={key}>{bullet}</li>
                    )
                  })}
                </div>
                <div style={{marginTop: "1em"}}>{puzzleText.main[1]} </div>
              </Typography>
            </Grid>

            <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start" className={classes.callContainer}>
              {calls.map(({ number, location, date, duration, audio_file, transcription }, key) => (
                <div key={key} className="callInfo">
                  <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start" className={classes.voicemailContainer}>
                    <Typography component="p" variant="body1" className={classes.phoneNumberText}>
                      {number}
                    </Typography>
                    <Typography component="p" variant="body1" className={classes.locationText}>
                      {location}
                    </Typography>
                    <Typography component="p" variant="body1" className={classes.dayText}>
                      {date}
                    </Typography>
                    <Typography component="p" variant="body1" className={classes.timeText}>
                      {duration}
                    </Typography>
                    <IconButton aria-label="info button" className={classes.infoIcon} 
                      onClick={() => {setCurrentVoicemail({"number": number, "location": location, "date": date, "duration": duration, "audio_file": audio_file, "transcription": transcription})}}
                      style={{cursor: "pointer"}}>
                        <Icon>
                          <img alt="info button" src={info_icon}/>
                        </Icon>
                    </IconButton>
                  </Grid>
                </div>
              ))}
            </Grid>

            <button className={classes.formButton} onClick={() => setIsOpen(true)}>
              Tap to see code
            </button>

            {isOpen && (
              <Lightbox
                mainSrc={public_url + code_chart}
                onCloseRequest={() => setIsOpen(false)}
              />
            )}

            <Grid className={classes.passwordForm} style={{width: "250px"}}>
              <CustomForm id={4} password={password} />
            </Grid>
          </Grid>

          {currentVoicemail && 
            <Dialog aria-labelledby="Voicemail" open={currentVoicemail != null} onClose={() => setCurrentVoicemail(null)} 
            PaperProps={{
              style: {
                  borderRadius: "40px"
              },
            }}>
              <Grid container direction="column" alignItems="center" justifyContent="flex-start" wrap="nowrap">
                <Grid container direction="column" alignItems="center" justifyContent="center" className={classes.voicemailPopup}>
                  <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start" wrap="nowrap" className={classes.voicemailContainer}>
                    <Typography component="p" variant="body1" className={classes.phoneNumberTextPopUp}>
                      {currentVoicemail.number}
                    </Typography>
                    <Typography component="p" variant="body1" className={classes.locationTextPopUp}>
                      {currentVoicemail.location}
                    </Typography>
                    <Typography component="p" variant="body1" className={classes.dayTextPopUp}>
                      {currentVoicemail.date}
                    </Typography>
                  </Grid>
                  <AudioPlayer
                    autoPlay
                    src={currentVoicemail.audio_file}
                    showJumpControls={false}
                    customControlsSection={[
                      RHAP_UI.MAIN_CONTROLS,
                      <div></div>,
                      <div></div>
                    ]}
                    style={{marginTop: "1em"}}
                  />
                  <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start" style={{marginTop: "1em"}}>
                    <Typography component="p" variant="body1" className={classes.transcriptionTitleText}>
                      Transcription
                    </Typography>
                    <Typography component="p" variant="body1" className={classes.transcriptionText}>
                      {currentVoicemail.transcription}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Dialog>
          }
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Puzzle3;