import React, {useState} from "react";

import Typography from "@material-ui/core/Typography";
import { Grid, makeStyles, Dialog, Icon, IconButton } from "@material-ui/core";

import CustomForm from "@/shared/Components/CustomForm.js";
import Gallery from "@/shared/Components/Gallery.js";
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';

import styles from "./style";
import { handleTextBoxChange } from "@/shared/UtilityFunctions"
import 'react-h5-audio-player/lib/styles.css';

// TODO: changed to props
const puzzle5 = require("../../../rooms/euphorigen/json/puzzle5.json");

const useStyles = makeStyles(styles);

const Puzzle1 = () => {
  const classes = useStyles();
  const { puzzleText, calls, password, info_icon } = puzzle5;
  const [currentVoicemail, setCurrentVoicemail] = useState(null)
  const public_url = "";

  return (
    <Grid container alignItems="center" justifyContent="center" wrap="nowrap" className={classes.background}>
      <Grid className={classes.backgroundImg}>

        <Grid container justifyContent="center" alignItems="center" wrap="nowrap" className={classes.content}>
          

          <Grid container direction="column" justifyContent="center" alignItems="center" wrap="nowrap" className={classes.window}>
              <Grid className={classes.passwordForm} style={{width: "250px"}}>
                <CustomForm id={4} password={password} />
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
                        onClick={() => {console.log(key); setCurrentVoicemail({"number": number, "location": location, "date": date, "duration": duration, "audio_file": audio_file, "transcription": transcription}); console.log(currentVoicemail);}}>
                          <Icon>
                            <img alt="info button" src={info_icon}/>
                          </Icon>
                      </IconButton>
                    </Grid>
                  </div>
                ))}
              </Grid>
          </Grid>

          {currentVoicemail && 
            <Dialog aria-labelledby="customized-dialog-title" open={currentVoicemail != null} onClose={() => {setCurrentVoicemail(null); console.log(currentVoicemail);}}>
              <Grid container direction="column" alignItems="center" justifyContent="flex-start"
                style={{width: "900px"}}>
                  <Grid container direction="column" alignItems="center" justifyContent="center" className={classes.voicemailPopup}>
                    <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start" className={classes.voicemailContainer}>
                      <Typography component="p" variant="body1" className={classes.phoneNumberText}>
                        {currentVoicemail.number}
                      </Typography>
                      <Typography component="p" variant="body1" className={classes.locationText}>
                        {currentVoicemail.location}
                      </Typography>
                      <Typography component="p" variant="body1" className={classes.dayText}>
                        {currentVoicemail.date}
                      </Typography>
                    </Grid>
                    <AudioPlayer
                      autoPlay
                      src={currentVoicemail.audio_file}
                      showJumpControls={false}
                      customControlsSection={
                        [
                          <div></div>,
                          RHAP_UI.MAIN_CONTROLS,
                          <div></div>
                        ]
                      }
                    />
                    <Typography component="p" variant="body1" className={classes.transcriptionText}>
                      {currentVoicemail.transcription}
                    </Typography>
                  </Grid>
              </Grid>
            </Dialog>
          }
        </Grid>

      </Grid>
    </Grid>
  );
};


/*
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
</div>
*/
export default Puzzle1;