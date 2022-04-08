import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles, TextField } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import CustomForm from "@/shared/Components/CustomForm.js";

import styles from "./style";
import { handleTextBoxChange } from "@/shared/UtilityFunctions"

// TODO: change to props
const puzzle3 = require("../../../rooms/euphorigen/json/puzzle3.json");

const useStyles = makeStyles(styles);

const Puzzle3 = () => {
  const classes = useStyles();
  const { puzzleText, password, data } = puzzle3;

  return (
    <Grid container justifyContent="center" alignItems="center" wrap="nowrap" className={classes.backgroundContainer}>
      <Grid className={classes.backgroundImgContainer}>
        <Grid container direction="row" justifyContent="center" alignItems="center" wrap="nowrap" className={classes.contentContainer}>
          <Grid container direction="column" justifyContent="center" alignItems="center" className={classes.messageAndNodeContainer}>
            <Grid container justifyContent="center" alignItems="center" className={classes.message}>
              <span style={{padding: "1em"}}>
                {puzzle3.message}
              </span>
            </Grid>

            <div style={{width:"675px", height:"650px", marginTop:"20px"}}>
              {data.nodes.map((node, key)=>{
                return (
                  <Name key={"node-"+key} name={node.id} x={node.x + "px"} y={node.y + "px"}/>
                )
              })}

              <svg width="675" height="650">
                {data.links.map((link, key) => {
                  let xStart = 0
                  let yStart = 0
                  let xEnd = 0
                  let yEnd = 0
                  data.nodes.forEach((node)=>{
                    if(node.id === link.source) {
                      xStart = node.x + 30
                      yStart = node.y + 30
                    } else if (node.id === link.target) {
                      xEnd = node.x + 30
                      yEnd = node.y + 30
                    }
                  })
                  return (
                    <line key={"line-"+key} x1={xStart} y1={yStart} x2={xEnd} y2={yEnd} stroke="#0085C7" strokeWidth="5"/>
                  )
                })}
              </svg>
            </div>
          </Grid>

          <Grid container direction="column" alignItems="center" className={classes.passwordAndPromptContainer}>
            <Typography component="div" variant="body1" className={classes.textContainer}>
              {puzzleText.title}
              <ul>
                {puzzleText.main.map((value, key) => (
                  <>
                  <li key={"li-"+key}>
                  <TextField
                    variant="outlined"
                    label=""
                    size="small"
                    className={classes.textField}
                    onBlur={function(event) {
                      handleTextBoxChange(event, "li-"+key)
                    }}
                  />
                    <Typography
                      component="span"
                      className={classes.redText}>
                      {`Story #${key + 1}: `}
                    </Typography>
                    <span>{value}</span>
                  </li>
                  <br/>
                  </>
                ))}
              </ul>
            </Typography>

            <Grid container direction="column" justifyContent="center" alignItems="center" className={classes.passwordForm}>
              <CustomForm id={5} password={password}/>
            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Name = (props) => {
  return (
    <div style={{width:"60px",height:"60px",borderRadius:"40px",backgroundColor:"#0085C7", justifyContent:"center",alignItems:"center",textAlign:"center", marginLeft:`${props.x}`,marginTop:`${props.y}`, position:"absolute",display:"flex"}}>
      <span style={{marginBottom:"3px",color:"white"}}>{props.name}</span>
    </div>
  );
}


export default Puzzle3;