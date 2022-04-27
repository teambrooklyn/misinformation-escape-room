import React, {useState} from "react";

import { Grid } from "@material-ui/core";

import TackBoard from "./TackBoard"
import CustomForm from "@/shared/Components/CustomForm.js";
import Alert from "@material-ui/lab/Alert";
import './Puzzle1.css';
import { Icon, IconButton, makeStyles } from "@material-ui/core";
import style from "./style";

// TODO: change to props
const puzzle1 = require("../../../rooms/euphorigen/json/puzzle1.json");
const useStyles = makeStyles(style)

const lights_icon = "/images/puzzle1/lights.svg";

const Puzzle1 = () => {
  const { password, prompts, statements, puzzleText, initialPosition, headlineBackground } = puzzle1;

  const classes = useStyles()
  const [isHighlighted, setHighlighted] = useState(false)

  return (
    <>
      <Grid container direction="column"alignItems="center" justifyContent="center" className={classes.background} id="p1grid"
        //see app.css for p1grid, sets fit-height for both firefox and non-firefox.
      >
        <Grid container direction="row" alignItems="center" justifyContent="center">
          <Alert severity="info" className={classes.alert}>
            {puzzleText.message}
          </Alert>

          <Grid className={classes.passwordForm}>
            <CustomForm id={1} password={password}/>
          </Grid>

          <IconButton aria-label="lights button" className={classes.lightsIcon} 
            onClick={() => {setHighlighted(!isHighlighted)}}
            style={{cursor: "pointer"}}>
              <Icon style={{width: "40px", height: "40px", borderRadius: "20px"}}>
                <img alt="turn on the lights" src={lights_icon} style={{maxWidth: "100%", maxHeight: "100%"}}/>
              </Icon>
          </IconButton>
        </Grid>

        <div style={{height: "100px"}}></div>

        {prompts.map(({text}, key)=>{
          const statement = statements[key];
          const position = initialPosition[key];

          return (
            <Grid container direction ="row" justifyContent="flex-start" alignItems="flex-start" wrap="nowrap">
              <TackBoard text={text} key={key} keyNumber={key} statement={statement} position={position} bg={headlineBackground} highlighted={isHighlighted}/>
            </Grid>
          );
        })}
    </Grid>
  </>
  );
};
export default Puzzle1;
