import React, { useRef } from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Grid, Typography } from "@material-ui/core"

import * as d3 from "d3";

import { makeStyles } from "@material-ui/core/styles";
import styles from "@/admin/style/passwordStatsStyle.js";
import Histogram from "@/admin/components/Histogram";

const PuzzleStats = (props) => {
    const useStyles = makeStyles(styles);
    const classes = useStyles();

    const ref = useRef()

    const generateTreemap = (data, ref) => {
        d3.select(ref).selectAll("*").remove();

        data.forEach(function (element) {
            element.color = "#d6ecfb";
        });
        //replace above with Math.floor(Math.random()*16777215).toString(16) for random
        data = {children: data}

        //doesn't actually dynamically set h/w atm, defaults to 530 x 375
        var svg = d3.select(ref)
       // console.log(svg)
        let width = svg === null ? svg.style("width").replace("px","") : 530
        let height = svg === null ? svg.style("height").replace("px","") : 375

        const treeMapLayout = d3.treemap().size([width,height]).padding(4);
        const root = d3.hierarchy(data);

        root.sum(d => d.count);
        treeMapLayout(root);

        //#passwordTreeMap
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
            .text(d => d.data.word)
    };

    if(props.passwordData) {
        //https://stackoverflow.com/questions/44387647/group-and-count-values-in-an-array/44387859
        var counts = props.passwordData.reduce((p, c) => {
            var playerid = c.playerid;
            if (!p.hasOwnProperty(playerid)) {
              p[playerid] = 0;
            }
            p[playerid]++;
            return p;
          }, {});

        var countsExtended = Object.keys(counts).map(k => {
            return {name: k, count: counts[k]}; });

        let labels = ["1", "2-3", "4-6", "7-10", "10+"]

        let histogramData = new Array(5).fill(0);
        countsExtended.forEach(({count})=>{
            if(count === 1) {
                histogramData[0]++
            } else if (count <= 3) {
                histogramData[1]++
            } else if (count <= 6) {
                histogramData[2]++
            } else if (count <= 10) {
                histogramData[3]++
            } else {
                histogramData[4]++
            }
        })

        var wordCounts = props.passwordData.reduce((p, c) => {
            var info = c.info;
            if (!p.hasOwnProperty(info)) {
              p[info] = 0;
            }
            p[info]++;
            return p;
          }, {});

        var wordCountsArray = Object.keys(wordCounts).map(k => {
            return {word: k, count: wordCounts[k]}; });

        wordCountsArray.sort(function(a, b) {
            return b.count - a.count;
        });

        setTimeout(()=>{
            generateTreemap(wordCountsArray, ref.current)
        },0)

        return (
            <Grid className={classes.component} container>
                    <Grid item xs={12}>
                        <Typography variant="h5" className={classes.title}>Incorrect Password Stats</Typography>
                    </Grid>
                    <Grid item xs = {12} className={classes.gridItem} align="center">
                        <Histogram data={histogramData} labels={labels} unit={"Num incorrect passwords"}></Histogram>
                    </Grid>
                    <Grid item xs = {6} className={classes.gridItem}>
                        <TableContainer component={Paper} className={classes.table}>
                            <Table aria-label="simple table">
                                <TableHead>
                                <TableRow>
                                    <TableCell>Incorrect Password</TableCell>
                                    <TableCell align="right">Count</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {wordCountsArray.map((item) => (
                                    <TableRow key={item.word}>
                                    <TableCell component="th" scope="row">
                                        {item.word}
                                    </TableCell>
                                    <TableCell align="right">{item.count}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                    <Grid item xs={6} className={classes.gridItem}>
                        <svg className={classes.svg} id = "passwordSvg" ref = {ref} style={{fill:"white"}}>
                            <g id="passwordTreeMap" style={{fill:"white"}}></g>
                        </svg>
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
