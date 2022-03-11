import React, { useState } from 'react'
import { useHistory, useRouteMatch, Route, Switch } from 'react-router-dom'

import { Grid, Typography, Button, TextField, AppBar, Toolbar } from "@material-ui/core";
import PuzzleStats from "@/admin/components/PuzzleStats"
import { SetCookie, GetCookie } from "@/shared/UtilityFunctions"

import { makeStyles } from "@material-ui/core/styles";
import styles from "@/admin/style/adminStyle.js";
const useStyles = makeStyles(styles);

const Admin = () => {
    const history = useHistory();
    const classes = useStyles();
    const match = useRouteMatch();

    const [loggedIn, setLogIn] = useState(false)
    const [password, setPassword] = useState("");

    const [trackable, updateTrackablePassword] = useState("")
    const [trackableConfirm, updateTrackablePasswordConfirm] = useState("")
    const [nonTrackable, updateNonTrackablePassword] = useState("")
    const [nonTrackableConfirm, updateNonTrackablePasswordConfirm] = useState("")

    const [passwords, setPasswords] = useState("")

    const updatePassword = (event) => {
        setPassword(event.target.value)
    }

    const login = () => {
        var body =
        {
        "password": password,
        "management": true
        }

        console.log(body)
        setTimeout(() => {

        fetch(`${process.env.REACT_APP_API_URL}/v1/sessions`, {
            method: 'post',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
            .then((response) => {
            if (response.status <= 201) {
                console.log(response.headers.get("authorization"))
                const auth = response.headers.get("authorization")
                SetCookie("auth", auth, 3600)
                SetCookie("adminSession", true, 3600)
                response.json().then((data) => {
                console.log(data)
                })
                setLogIn(true)
            } else {
                console.log("failed :(", response.status)
                alert("Incorrect password")
            }
            })
        }, 0)
    }

    const getPassword = () => {
        setTimeout(() => {
            fetch(`${process.env.REACT_APP_API_URL}/game/manage/password`, {
                method: 'get',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': GetCookie('auth')
                },
            })
                .then((response) => {
                if (response.status <= 201) {
                    response.json().then((data) => {
                        setPasswords(data)
                        console.log(data)
                    })
                } else {
                    console.log("failed :(", response.status)
                }
                })
            }, 0)
    }

    const setERPassword = (password, track ) => {
        var body =
        {
            "password": password,
            "track": track
        }

        setTimeout(() => {
        fetch(`${process.env.REACT_APP_API_URL}/game/manage/password`, {
            method: 'post',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': GetCookie('auth')
            },
            body: JSON.stringify(body)
        })
            .then((response) => {
            if (response.status <= 201) {
                console.log("changed")
                alert("Password changed to " + password)
            } else {
                console.log("failed :(", response.status)
            }
            })
        }, 0)
    }

    if(GetCookie('adminSession') || loggedIn) {
        return (
            <div className={classes.allContent}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}
                        onClick={()=>{
                            history.push(match.path)
                        }}>
                        Euphorigen Admin
                        </Typography>
                        <Button color="inherit" onClick={()=>{
                            history.push(match.path + "/passwords")
                        }}
                        >Manage Passwords</Button>
                        <Button color="inherit" onClick={() => {
                            SetCookie("auth", "", 1)
                            SetCookie("adminSession", true, 1)
                            history.push("/")
                        }}>Logout</Button>
                    </Toolbar>
                </AppBar>
                <Switch>
                    <Route path={`${match.path}/passwords`}>
                        <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            className={classes.changePWGrid}>
                            <Typography variant ="h4"> Change Passwords</Typography>
                            <br></br>
                            <Typography variant ="h5"> Trackable Password</Typography>
                            <TextField className={classes.textarea} label="Password" variant="outlined"
                                onChange={(event)=>{
                                    updateTrackablePassword(event.target.value)
                                }}/>
                            <TextField className={classes.textarea} label="Confirm Password" variant="outlined"
                                onChange={(event)=>{
                                    updateTrackablePasswordConfirm(event.target.value)
                                }}/>
                            <Button type="submit"
                                variant="contained"
                                size="small"
                                color="primary"
                                style={{marginTop: "15px", marginLeft: "5px"}}
                                onClick={()=> {
                                    if(trackable === trackableConfirm) {
                                        setERPassword(trackable,true)
                                        alert("Trackable password changed to" + trackable)
                                    } else {
                                        alert("Passwords do not match")
                                    }
                                }}>
                                Change Password
                            </Button>
                            <br></br>
                            <Typography variant ="h5"> Non-Trackable Password</Typography>
                            <TextField className={classes.textarea} label="Password" variant="outlined"
                                onChange={(event)=>{
                                    updateNonTrackablePassword(event.target.value)
                                }}/>
                            <TextField className={classes.textarea} label=" Confirm Password" variant="outlined"
                                onChange={(event)=>{
                                    updateNonTrackablePasswordConfirm(event.target.value)
                                }}/>
                            <Button type="submit"
                                variant="contained"
                                size="small"
                                color="primary"
                                style={{marginTop: "15px", marginLeft: "5px"}}
                                onClick={()=> {
                                    if(nonTrackable === nonTrackableConfirm) {
                                        setERPassword(nonTrackable,false)
                                    } else {
                                        alert("Passwords do not match")
                                    }
                                }}>
                                Change Password
                            </Button>
                            <br></br>
                            <Typography variant ="h4"> Show Passwords</Typography>

                            <Button  type="submit"
                                variant="contained"
                                size="small"
                                color="primary"
                                style={{marginTop: "15px", marginLeft: "5px"}}
                                onClick={getPassword}
                                >
                                Show Current Passwords
                            </Button>
                                {passwords === "" ? null :
                                <div className={classes.showPasswordsText}>
                                    <div>Trackable Password: {passwords.tpassword}</div>
                                    <div>Non-trackable Password: {passwords.ntpassword}</div>
                                </div> }
                        </Grid>
                    </Route>
                    <Route path={match.path}>
                    <Grid
                        container
                        direction="column"
                        alignItems="center">
                            <Grid container
                                direction="column"
                                alignItems="center"
                                className={classes.metricGrid}>

                                <Typography variant="h4">
                                    Puzzle Metrics
                                </Typography>
                                <br></br>
                                <PuzzleStats></PuzzleStats>
                            </Grid>
                        </Grid>
                    </Route>
                </Switch>
            </div>

        )
    } else {
        return (
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center">
            <Typography variant="h4">
                Euphorigen Admin Site
            </Typography>
            <br></br>
            <Typography>
                Please Log In
            </Typography>
            <TextField className={classes.textarea} label="Password" variant="outlined"
            onChange={updatePassword}/>
            <Button  type="submit"
                variant="contained"
                size="small"
                color="primary"
                style={{marginTop: "15px", marginLeft: "5px"}}
                onClick={login}
                >
                Login
            </Button>
        </Grid>
        )
    }
  };

  export default Admin;
