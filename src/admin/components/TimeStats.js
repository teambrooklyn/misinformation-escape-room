import React from "react";
import { Grid, Typography } from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles";
import styles from "@/admin/style/timeStatsStyle.js";

import Histogram from "@/admin/components/Histogram";

const TimeStats = (props) => {
    const useStyles = makeStyles(styles);
    const classes = useStyles();

    if(props.timeData) {
        var seenIDs = {};
        let timeStart = props.timeData.filter(d => d.info === "start")
        timeStart = timeStart.filter(function(currentObject) {
            if (currentObject.playerid in seenIDs) {
                return false;
            } else {
                seenIDs[currentObject.playerid] = true;
                return true;
            }
        });

        seenIDs = {};
        let timeEnd = props.timeData.filter(d => d.info === "end")
        timeEnd = timeEnd.filter(function(currentObject) {
            if (currentObject.playerid in seenIDs) {
                return false;
            } else {
                seenIDs[currentObject.playerid] = true;
                return true;
            }
        });

        let joinedData = []
        timeStart.forEach((startElement)=>{
            timeEnd.forEach((endElement)=>{
                if(startElement.playerid === endElement.playerid) {
                    var toLoopArray = [startElement, endElement]

                    var resultantObject = {};
                    toLoopArray.forEach(function(item, index) {
                        for (var keys in item) {
                            if (!(resultantObject.hasOwnProperty(keys))) {
                            resultantObject[keys] = item[keys]
                            } else {
                            resultantObject[keys + index] = item[keys]
                            }
                        }
                    })
                    joinedData.push(resultantObject)
                }
            })
        })

        let times = joinedData.map((element)=>{
            let date1 = new Date(element.timeinitiated)
            let date2 = new Date(element.timeinitiated1)
            return (date2 - date1)/1000
        })

        let avgTime = ((times.reduce((a, b) => a + b) / times.length)/60).toFixed(2);

        let labels = ['0-5', '5-10', '10-15', '15-20', '20+']

        let histogramData = new Array(5).fill(0);
        times.forEach((time)=>{
            if(time <= 300) {
                histogramData[0]++
            } else if (time <= 600) {
                histogramData[1]++
            } else if (time <= 900) {
                histogramData[2]++
            } else if (time <= 1200) {
                histogramData[3]++
            } else {
                histogramData[4]++
            }
        })

        return (
            <Grid className={classes.content}>
                <Typography variant="h5">Average Puzzle Completion Time: {avgTime} minutes</Typography>
                <Histogram data={histogramData} labels={labels} unit={"Num groups"}></Histogram>
            </Grid>
        )
    } else {
        return (
            <div>loading</div>
        )
    }
}

export default TimeStats;