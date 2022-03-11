import React from "react";

import { Grid } from "@material-ui/core";

import TackBoard from "./TackBoard"
import CustomForm from "@/shared/Components/CustomForm.js";
import Alert from "@material-ui/lab/Alert";
import './Puzzle1.css';
import { makeStyles } from "@material-ui/core/styles";
import style from "./style";

// TODO: change to props
const puzzle1 = require("../../../rooms/euphorigen/json/puzzle1.json");
const useStyles = makeStyles(style)

const Puzzle1 = () => {
  const { password, prompts, statements, puzzleText, initialPosition } = puzzle1;

  const classes = useStyles()
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
        </Grid>

          <Grid container direction ="row" justifyContent="center" alignItems="center" wrap="nowrap">
              {prompts.slice(0, 3).map(({text}, key)=>{
              const statement = statements[key];
              const position = initialPosition[key];

                return <TackBoard text={text} key={key} keyNumber={key} statement={statement} position={position}/>
              })}
          </Grid>

          <Grid container direction ="row" justifyContent="center" alignItems="center" wrap="nowrap">
              {prompts.slice(3, 6).map(({text}, key)=>{
              const currentKey = key + 3;
              const statement = statements[currentKey];
              const position = initialPosition[currentKey];

                return <TackBoard text={text} key={currentKey} keyNumber={currentKey} statement={statement} position={position}/>
              })}
          </Grid>

          <Grid container direction ="row" justifyContent="center" alignItems="center" wrap="nowrap">
              {prompts.slice(6, 7).map(({text}, key)=>{
              const currentKey = key + 6;
              const statement = statements[currentKey];
              const position = initialPosition[currentKey];

                return <TackBoard text={text} key={currentKey} keyNumber={currentKey} statement={statement} position={position}/>
              })}
          </Grid>
    </Grid>
  </>
  );
};
export default Puzzle1;
