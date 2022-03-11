import React from "react";

import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import style from "./style"

import Card from "@/shared/Components/Card.js";
const useStyles = makeStyles(style)

const TackBoard = ({text, keyNumber, statement, position}) => {

    const classes = useStyles()

    return(
        <Grid className={classes.tackBoardContainer}>
            <Typography className={classes.notePrompt}>
            {text}
            </Typography>
            <Grid container direction="row" justifyContent="center" className={classes.bluePinContainer}>
                <Paper elevation={3} className={classes.bluePin}></Paper>
            </Grid>

            <div className={classes.textMarkContainer} >
                <Typography className={classes.textMark} >
                    <span style={{opacity:"0"}}>{statement.text.substring(0, statement.letterIndex).replaceAll(/[^\s]/g,"0")}</span>
                    <mark style={{opacity:"40%", backgroundColor:"#40B0A6"}}><span style={{opacity:"0", zIndex:"1001"}}>&nbsp;</span></mark>
                    <span style={{opacity:"0"}}>{statement.text.substring(statement.letterIndex + 1, statement.text.length).replaceAll(/[^\s]/g,"0")}</span>
                </Typography>
            </div>

            <Card x={position.x} y={position.y} src={statement.src} keyNumber={keyNumber} text={statement.text}/>
        </Grid>
    )
}

export default TackBoard;
