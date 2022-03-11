import React, { useEffect, useState } from "react";
import { Grid, MenuItem, FormControl, InputLabel, Select, Divider } from "@material-ui/core"

import styles from "@/admin/style/statsStyle";
import { makeStyles } from "@material-ui/core/styles";
import { GetCookie } from "@/shared/UtilityFunctions"

import PasswordStats from "@/admin/components/PasswordStats"
import TimeStats from "@/admin/components/TimeStats"
import InputStats from "@/admin/components/InputStats"

const PuzzleStats = () => {
    const useStyles = makeStyles(styles);
    const classes = useStyles();

    const [puzzle, setPuzzle] = useState(1)
    const [data, setData] = useState("")

    const getStats = (puzzleId) => {
        setTimeout(() => {
            fetch(`${process.env.REACT_APP_API_URL}/game/metrics?puzzleid=${puzzleId}`, {
                method: 'get',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': GetCookie('auth')
                },
            })
                .then((response) => {
                if (response.status <= 201) {
                    response.json().then((data) => {
                        console.log(data)
                        setData(data)
                        setPuzzle(puzzleId)
                    })
                } else {
                    console.log("failed :(", response.status)
                }
                })
            }, 0)
    }

    useEffect(()=>{
        getStats(1)
    },[])

if(data !== "") {
    return (
        <Grid container className={classes.statsContent} alignItems="center" direction="column">
             <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Puzzle</InputLabel>
                <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={puzzle}
                onChange={(e)=> {
                    getStats(e.target.value)
                }}
                label="Puzzle"
                >
                <MenuItem value={1}>Headlines</MenuItem>
                <MenuItem value={2}>Misleading Charts</MenuItem>
                <MenuItem value={3}>Deepfakes</MenuItem>
                <MenuItem value={4}>Emoji Math</MenuItem>
                <MenuItem value={5}>Network</MenuItem>
                </Select>
            </FormControl>
            <Grid item xs={12}>
                <TimeStats timeData={data.filter(d => d.metrictype === "TimeEvent")} ></TimeStats>
            </Grid>
            <Divider></Divider>
            <Grid item xs={12}>
                <PasswordStats passwordData={data.filter(d => d.metrictype === "Password")}></PasswordStats>
            </Grid>
            <Grid item xs={12}>
                 <InputStats puzzleId={puzzle} inputData={data.filter(d => d.metrictype === "Match" || d.metrictype === "InputBox")}>s</InputStats>
            </Grid>
        </Grid>
    )
} else {
    return (
        <div>loading</div>
    )
}
}


export default PuzzleStats;
