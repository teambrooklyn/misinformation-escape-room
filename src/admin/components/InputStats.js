import React, { useState, useRef, useEffect } from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Grid, Typography, FormControl, InputLabel, MenuItem, Select } from "@material-ui/core"

import * as d3 from "d3";

import { makeStyles } from "@material-ui/core/styles";
import styles from "@/admin/style/inputStatsStyle.js";

const InputStats = (props) => {
    const useStyles = makeStyles(styles);
    const classes = useStyles();

    const [boxIndex, setBoxIndex] = useState(0)

    const ref = useRef()

    //sets input box to 1 when puzzle changes
    useEffect(()=>{
        setBoxIndex(0)
    },[props.puzzleId])

    const generateTreemap = (data, ref) => {
        d3.select(ref).selectAll("*").remove();

        data.forEach(function (element) {
            element.color = "#d6ecfb";
        });
        //replace above with Math.floor(Math.random()*16777215).toString(16) for random
        data = {children: data}

        //doesn't actually dynamically set h/w atm, defaults to 530 x 375
        var svg = d3.select(ref)
        let width = svg === null ? svg.style("width").replace("px","") : 530
        let height = svg === null ? svg.style("height").replace("px","") : 375

        const treeMapLayout = d3.treemap().size([width,height]).padding(4);
        const root = d3.hierarchy(data);

        root.sum(d => d.count);
        treeMapLayout(root);

       var nodes = d3.select(ref)
        .selectAll('g')
        .data(root.descendants())
        .enter()
        .append('g')
        .attr('transform', d => 'translate(' + [d.x0, d.y0] + ')')
        .attr('fill', d => d.data.color)

        nodes
            .append('rect')
            .attr('width', d => d.x1 - d.x0)
            .attr('height', d => d.y1 - d.y0)
            .style("stroke", d => {
                return d.height === 1 ? null : "black"
            })

        nodes
            .append('text')
            .attr('dx', 4)
            .attr('dy', 14)
            .attr('fill','black')
            .text(d => d.data.input)
    };

    if(props.inputData !== "") {
        let groupInput = [...Array(9)].map(e => []);

        props.inputData.forEach((metric)=>{
            groupInput[Number(metric.info.charAt(0)) - 1].push(metric.info.substring(1,metric.info.length))
        })

        //removes empty array elemens so that there is only the a number equal to the number of input boxes
        while(groupInput.length !== 0 && groupInput[groupInput.length - 1].length === 0) {
            groupInput.pop()
        }

        let freqs = groupInput.map((inputBox)=>{
            return inputBox.reduce((r,c) => ((r[c] = (r[c] || 0) + 1, r)), {})
        })

        freqs = freqs.map((freq)=>{
            return Object.keys(freq).map(k => {
                return {input: k, count: freq[k]}; }).sort((a, b) =>
                    b.count - a.count
                );
        })

        //makes sure boxIndex is not > # of boxes after changing puzzle
        let displayBI = boxIndex
        if(boxIndex >= freqs.length) {
            displayBI = 0
        }

        if(freqs.length > 0 ) {
            setTimeout(()=>{
                generateTreemap(freqs[displayBI], ref.current)
            },0)
        } else {
            d3.select(ref.current).selectAll("*").remove();
        }

        return (
            <Grid container className={classes.component}>
                <Grid item xs={12}>
                    <Typography variant="h5" className={classes.title}>Input Box Stats</Typography>
                </Grid>
                <Grid item xs={12} align="center" className={classes.selectContainer}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Input Box</InputLabel>
                        <Select
                        value={displayBI}
                        onChange={(e)=>setBoxIndex(e.target.value)}
                        label="Input Box"
                        >
                        {freqs.map((_,index)=>{
                            return (
                                <MenuItem key={index} value={index}>{index+1}</MenuItem>
                            )
                        })}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={6} className={classes.gridItem}>
                    <svg className={classes.svg} id = "inputSvg" ref = {ref} style={{fill:"white"}}>
                            <g id="passwordTreeMap" style={{fill:"white"}}></g>
                    </svg>
                </Grid>
                <Grid item xs={6} className={classes.gridItem}>
                    <TableContainer component={Paper} className={classes.table}>
                        <Table aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Input Box Id</TableCell>
                                <TableCell align="right">Content</TableCell>
                                <TableCell align="right">Count</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {freqs.length > 0 ? freqs[displayBI].map((item) => (
                                <TableRow key={item.input}>
                                <TableCell>{displayBI + 1}</TableCell>
                                <TableCell component="th" scope="row" align="right">
                                    {item.input}
                                </TableCell>
                                <TableCell align="right">{item.count}</TableCell>
                                </TableRow>
                            )) : null}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        )
    } else {
        return (
            <div>loading</div>
        )
    }
}

export default InputStats;