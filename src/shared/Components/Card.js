import React from "react";
import Draggable from "react-draggable";
import { Grid, Paper, Typography } from "@material-ui/core";
import { GetCookie, getWithExpiry, logMetric, rectanglesOverlap } from "@/shared/UtilityFunctions"
import '@/shared/Components/card.css'

const Card = (props) => {
  const promptTacCoords = []

  setTimeout(()=>{
    for(let  i = 0; i<8; i++) {
      let promptTac = document.getElementById(i+"promptTac")
      if(promptTac != null) {
        promptTacCoords.push(promptTac.getBoundingClientRect())
      } else {
        console.log("failed")
      }
    }
  },0)

  const handleStop = () => {
    let cardTac = document.getElementById(props.keyNumber+"tac")
    let tacCoords = cardTac.getBoundingClientRect()

    if(GetCookie("trackable") === "true") {
      promptTacCoords.forEach((promptTac, index)=>{
        if(rectanglesOverlap([tacCoords.left,tacCoords.top],[tacCoords.right, tacCoords.bottom],[promptTac.left,promptTac.top],[promptTac.right,promptTac.bottom])) {
          console.log("yup!!", `${index + 1}${props.keyNumber+1}`)
          const level = parseInt(getWithExpiry("level"))
          logMetric(level, "Match",`${index + 1}${props.keyNumber+1}`)
        }
      })
    }
  }

  return (
    <Draggable
      axis="both"
      handle=".handle"
      defaultPosition={{ x:props.x, y: props.y }}
      position={null}
      grid={[15, 15]}
      scale={1}
      onStop={handleStop}
    >
      <div className="card" style={{zIndex: "999", position: "relative"}}>
        <Grid className="handle">
          <div
          style={{width: "300px", height: "200px", marginRight:"10px",marginLeft:"10px", marginBottom:"20px", textAlign:"left", alignItems:"center",zIndex:"999", cursor: "grab", backgroundImage: `url("${props.src}")`, backgroundPosition:"center", backgroundSize:"contain", backgroundRepeat: "no-repeat"}}>
            <Grid container direction="row" justifyContent="center" style={{paddingTop:"10px", paddingBottom:"10px"}}>
              <Paper elevation={3}
              style={{borderRadius:"50px", width:"33px", height:"33px",background:"rgb(117 117 117)"}} id={props.keyNumber+ "tac"}></Paper>
            </Grid>
            <Typography style={{fontFamily:"'Courier Prime', monospace", fontSize:"17px", paddingLeft:"25px",paddingRight:"25px"}}>
            {props.text}
            </Typography>
          </div>
        </Grid>
      </div>
    </Draggable>
  );

}

export default Card;
