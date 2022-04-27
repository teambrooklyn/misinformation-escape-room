import React from "react";

import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import style from "./style"

import Card from "@/shared/Components/Card.js";
const useStyles = makeStyles(style)

const TackBoard = ({text, keyNumber, statement, position, bg, highlighted}) => {

    const classes = useStyles()

    return(
        <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start" className={classes.tackBoardContainer}>
            <Typography className={classes.notePrompt}>
                {text}
            </Typography>
            
            <Grid container direction="row" className={classes.bluePinContainer}>
                <Paper elevation={3} className={classes.bluePin}></Paper>

                { highlighted &&
                    <div className={classes.textMarkContainer} >
                        <Typography className={classes.textMark} >
                            <span style={{opacity:"0"}}>{statement.text.substring(0, statement.letterIndex)/*.replaceAll(/[^\s]/g,"0")*/}</span>
                            <mark style={{opacity:"40%", backgroundColor:"#131CA4"}}><span style={{opacity:"0", zIndex:"1001"}}>{statement.letter}</span></mark>
                            <span style={{opacity:"0"}}>{statement.text.substring(statement.letterIndex + 1, statement.text.length)/*.replaceAll(/[^\s]/g,"0")*/}</span>
                        </Typography>
                    </div>
                }
            </Grid>

            <Card x={position.x} y={position.y} src={bg} keyNumber={keyNumber} text={statement.text}/>
        </Grid>
    )
}

// 

export default TackBoard;
